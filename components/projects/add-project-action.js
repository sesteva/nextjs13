"use server"

import { revalidatePath, revalidateTag } from "next/cache"

export async function addProject(formData) {
  const res = await fetch(`http://localhost:3005/api/projects`, {
    cache: "no-cache",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      purchaseOrderNumber: formData.get("purchaseOrderNumber"),
      jobNumber: formData.get("jobNumber"),
    }),
  })
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to add project")
  }
  // revalidatePath("/projects")
  revalidateTag("projects")
  return res.json()
}
