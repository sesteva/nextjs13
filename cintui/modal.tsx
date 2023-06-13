"use client"

import * as Dialog from "./dialog"

export default function Modal({ children, title, opened = false }) {
  return (
    <Dialog.Root open={opened}>
      <Dialog.Overlay variant="blur" />
      <Dialog.Content>
        <Dialog.Title>{title}</Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Root>
  )
}
