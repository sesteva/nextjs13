"use client"

import { useCallback } from "react"
import { redirect, useRouter } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import * as Form from "@radix-ui/react-form"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"

import { addProject } from "../../app/add-project-action"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function CreateProjectForm() {
  const router = useRouter()
  const { pending } = useFormStatus()
  console.log("rendering...createProjectForm")

  async function action(formData) {
    await addProject(formData)
    console.log("project added, redirecting...")
    // router.back()
    redirect("/projects")
  }

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  return (
    <Form.Root asChild>
      <form action={action}>
        <TextField
          name="name"
          label="Name"
          min="3"
          max="20"
          autoFocus
          required
        />

        <TextField
          name="purchaseOrderNumber"
          max="20"
          label="Purchase Order Number"
        />

        <TextField name="jobNumber" max="20" label="Job Number" />

        <div className="align-items mt-6 flex justify-end">
          <Button type="submit" className="mr-1" disabled={pending}>
            {pending ? "Creating..." : "Create"}
          </Button>

          <Dialog.Close asChild>
            <Button aria-label="Close" onClick={() => onDismiss()}>
              Close
            </Button>
          </Dialog.Close>
        </div>
      </form>
    </Form.Root>
  )
}
