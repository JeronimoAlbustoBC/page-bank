// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: {
    padding: "sm",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    children: (
      <div>
        <p>Some text here</p>
        <p>More text</p>
      </div>
    ),
  },
};
