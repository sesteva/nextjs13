import type { Meta, StoryObj } from "@storybook/react"

import { Button, buttonVariants } from "../cintui/button"

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {

  }
};

export default meta;
type Story = StoryObj<typeof Button>;

const commonArgs = {
  children: "Create"
}

export const Default: Story = {
  args: {
    variant: 'default',
    size: "default",
    ...commonArgs

  },
};
