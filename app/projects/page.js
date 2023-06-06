import Link from "next/link"

import { Button } from "@/components/ui/button"

async function getProjects() {
  const res = await fetch("http://localhost:3005/api/projects")

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return res.json()
}

export default async function Page() {
  const response = await getProjects()

  return (
    <div className="p-6">
      <div className="align-items flex justify-between">
        <Button asChild>
          <Link href="/projects/create">Create Project</Link>
        </Button>
      </div>

      <div className="flex max-w-2xl flex-col rounded-md bg-white">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Purchase Order #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Job #
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {response.map((project) => (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={project.id}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {project.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link href={`/projects/${project.id}/target-groups`}>
                          {project.name}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {project.purchaseOrderNumber}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {project.jobNumber}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
