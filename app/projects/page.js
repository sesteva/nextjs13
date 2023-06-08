import Link from "next/link"

import { Button } from "@/components/ui/button"
import ProjectsTable from "@/components/projects/projects-table"

// export const dynamic = "force-dynamic"
// export const revalidate = 1

async function getProjects() {
  console.log("going to get prjs....")
  const res = await fetch("http://localhost:3005/api/projects", {
    next: { tags: ["projects"] },
    cache: "no-cache",
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  return res.json()
}

export default async function Page() {
  const response = await getProjects()
  console.log("rendering...Projects page")

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="float-right sm:flex-auto ">
            <h1 className="text-base font-semibold leading-6 text-gray-900 ">
              Projects
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the projects in your account
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button asChild>
              <Link href="/create">Create Project</Link>
            </Button>
          </div>
        </div>
        <ProjectsTable projects={response} />
      </div>
    </section>
  )
}
