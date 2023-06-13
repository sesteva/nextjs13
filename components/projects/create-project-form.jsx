"use client"

import { useState } from "react"
import { Button } from "@cintui/button"
import Modal from "@cintui/modal"
import { TextField } from "@cintui/text-field"
import * as Dialog from "@radix-ui/react-dialog"
import * as Form from "@radix-ui/react-form"

import { addProject } from "./add-project-action"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function CreateProjectForm() {
  const [isFormOpened, setFormOpened] = useState(false)

  async function action(formData) {
    await addProject(formData)
    setFormOpened(false)
  }

  return (
    <>
      <Button aria-label="Open" onClick={() => setFormOpened(true)}>
        Create
      </Button>
      <Modal opened={isFormOpened}>
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
                <Button aria-label="Close" onClick={() => setFormOpened(false)}>
                  Close
                </Button>
              </Dialog.Close>
            </div>
          </form>
        </Form.Root>
      </Modal>
    </>
  )
}
