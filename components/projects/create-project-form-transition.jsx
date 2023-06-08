"use client"

import { useCallback, useRef, useTransition } from "react"
import { redirect, useRouter } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import * as Form from "@radix-ui/react-form"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"

import { addProject } from "./add-project-action"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function CreateProjectForm() {
  const router = useRouter()
  const { pending } = useFormStatus()
  let [isPending, startTransition] = useTransition()
  const form = useRef(null)

  console.log("rendering...createProjectForm")

  async function addPrj(e) {
    e.preventDefault()
    const data = new FormData(form.current)
    await addProject(data)
    router.back()
    // redirect("/projects")
  }

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  return (
    <Form.Root asChild>
      <form ref={form}>
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
          <Button
            className="mr-1"
            onClick={(e) => startTransition(() => addPrj(e))}
          >
            Tranisition Create
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
