import type { Meta, StoryObj } from "@storybook/react"

import * as Dialog from "./dialog"

const meta: Meta<typeof Dialog.Root> = {
  title: "Atoms/Dialog",
  component: Dialog.Root,
  tags: ["autodocs"],
  parameters: {
    title: "Dialog title",
    children: "<div>some content inside</div>",
    open: false,
  },
}

export default meta

export const Default = () => (
  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
    <Dialog.Root open>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Title
        </Dialog.Title>
        <div>Children</div>
      </Dialog.Content>
    </Dialog.Root>
  </div>
)
