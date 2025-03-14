// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ErrorCard } from "./index";

const meta: Meta<typeof ErrorCard> = {
  title: "Molecules/ErrorCard",
  component: ErrorCard,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof ErrorCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
