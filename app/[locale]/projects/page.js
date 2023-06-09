import ProjectsTable from "@/components/projects/projects-table"

// export const dynamic = "force-dynamic"
// export const revalidate = 1

async function getProjects() {
  console.log("going to get prjs....")
  const res = await fetch("http://localhost:3005/api/projects", {
    next: { tags: ["projects"] },
    cache: "no-store",
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
        <ProjectsTable projects={response} />
      </div>
    </section>
  )
}
