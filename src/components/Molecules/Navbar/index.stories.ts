// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Navbar } from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Molecules/Navbar",
  component: Navbar,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
