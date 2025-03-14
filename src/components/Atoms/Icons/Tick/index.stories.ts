// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { Tick } from "./index";

const meta: Meta<typeof Tick> = {
  title: "Atoms/Icons/Tick",
  component: Tick,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Tick>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 185,
  },
};
