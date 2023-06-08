"use client"

// This will not be needed when [...catchAll] works properly
// Same applies to the "use client" above
// https://github.com/vercel/next.js/issues/49662
import { usePathname } from "next/navigation"

import Modal from "@/components/ui/modal"
import CreateProjectForm from "@/components/projects/create-project-form"
import CreateProjectFormTransition from "@/components/projects/create-project-form-transition"

export default function CreateProjectModal() {
  // see above
  const pathname = usePathname()
  console.log({ pathname })
  if (!pathname.includes("create")) {
    console.log("not showing modal this time")
    return null
  }
  console.log("showing modal this time")
  return (
    <Modal>
      <CreateProjectForm />
      <CreateProjectFormTransition />
    </Modal>
  )
}
