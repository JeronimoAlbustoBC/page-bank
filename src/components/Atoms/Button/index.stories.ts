// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Conocé mas",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Conocé mas",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Conocé mas",
  },
};
