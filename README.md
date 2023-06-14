# Next.js 13 + Radix UI + Tailwind CSS

## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.
- MSW as standalone server
- Server Actions
- Intercept Urls (now removed as proved not ready)
- Storybook
- i18n with examples for english and spanish
- treat @cintui as external package + eslint to protect from importing relatively - We can/probably will extract later to its own package
- Vertical Side Menu with pure CSS , server side
- Menu is config based which enables us to pick up the config for testing


## TODO
- apply themes to all components
- add better loading skeletons
- add a manual refresh data button
- Playwright
- Playwright + AXE
- Split IO
- Sentry
- Fullstory or Matomo?

## Nice to Have
- add a search command bar

## Observations

### Intercept Urls - use case: Modal
  NEXTJS - modal has bugs, the interceptor does not unmount causing the underlying page not to revalidate or get fresh data.
  https://github.com/vercel/next.js/issues/49662
  https://github.com/vercel/next.js/discussions/49345
  It may also be 2 different problems, the modal does not unmount and the data refresh mechanism is broken.
  I have found a simple solution to let NextJS know it should refresh data
  ```
      const random = Math.random()
      redirect(`/projects?${random}`)
  ```

  Compairson to Remix: In both is it lazy loaded in browser, and closing it means update url and remove the element
  Setup: Remix you add outlet in the page. Nextjs adds modal.

### Server Actions
  It works fine. As in comparison to Remix Im sure more needds to be evolved but so far so good as to process actions on the server even from the client.

#### Related side effect
  NextJS using server actions reloads fonts (next/font) which creates jitter. It is reloading the entire layout.
  https://github.com/vercel/next.js/issues/50879
  https://github.com/vercel/next.js/issues/50938
  This went away when I found the above hack to refresh data. Why? Why? Why?

### Radix UI
  Only once or twice, Ive encountered components can’t be run on the server.
  Remix loads them in the browser without asking
  Nextjs requires us adding “use client” , the compiler lets you know
  Great note: SHADCN project has NPX scripts to generate components which even include RadixUI

### MSW
 It can work as including in the code OR as standalone server. The second option is best.
 The problem with setting up as recommended even by MSW is that it generates a server mocks setup every time you change routes.

### Suspense:
  NextJS auto wraps it in Suspense and leverages file convention for the fallback
  In Remix we need to wrap it with an Await component and defer the http request returning a promise instead.

### Routing Uglyness
  NextJS has folders but every route needs a page.js. Searching on IDE for 40 page.js is not ideal but it is easy to fix by searching “projects page.js” to find /projects/pages.js
  Recommendation: dont add sub routes/segments, prefer a new folder at /app . This will save you from falling into traps with some of the magic NextJS provides around slots such as @modal and URL interceptions.
  Remix proposes an infinite number of files and we need to understand a not so simple file naming convention. This impacts even where it gets rendered.









