// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { Cross } from "./index";

const meta: Meta<typeof Cross> = {
  title: "Atoms/Icons/Cross",
  component: Cross,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Cross>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 185,
  },
};
