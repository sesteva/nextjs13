import ProjectsTable from "@/components/projects/projects-table"

async function getProjects() {
  const res = await fetch("http://localhost:3005/api/projects")

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  return res.json()
}

export default async function Page() {
  const response = await getProjects()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <ProjectsTable projects={response} />
    </section>
  )
}
