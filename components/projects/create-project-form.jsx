"use client"

import { useCallback } from "react"
// import Link from "next/link"
import { useRouter, useState } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import * as Form from "@radix-ui/react-form"

import { Button } from "@/components/ui/button"
import { TextField } from "@/components/ui/text-field"

import { addProject } from "./add-project-action"

export default function CreateProjectForm() {
  const router = useRouter()

  async function action(formData) {
    await addProject(formData)
  }

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  return (
    // <form action={action}>
    //   <input name="name"></input>
    //   <button type="submit">Add to Cart</button>
    // </form>
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
          <Button type="submit" className="mr-1">
            Create
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
