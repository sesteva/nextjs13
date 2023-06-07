"use client"

// This will not be needed when [...catchAll] works properly
// Same applies to the "use client" above
// https://github.com/vercel/next.js/issues/49662
import { usePathname } from "next/navigation"

import Modal from "@/components/ui/modal"
import CreateProjectForm from "@/components/projects/create-project-form"

export default function CreateProjectModal() {
  // see above
  const pathname = usePathname()
  if (!pathname.includes("create")) {
    return null
  }
  return (
    <Modal>
      <CreateProjectForm />
    </Modal>
  )
}
