"use server"

export async function addProject(formData) {
  console.log(formData)
  const res = await fetch(`http://localhost:3005/api/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      purchaseOrderNumber: formData.get("purchaseOrderNumber"),
      jobNumber: formData.get("jobNumber"),
    }),
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to add project")
  }
}
