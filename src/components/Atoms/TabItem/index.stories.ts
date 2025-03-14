// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TabItem } from "./index";

const meta: Meta<typeof TabItem> = {
  title: "Atoms/TabItem",
  component: TabItem,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof TabItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotActive: Story = {
  args: {
    id: "id",
    active: false,
    label: "Empresas",
  },
};

export const Active: Story = {
  args: {
    id: "id",
    active: true,
    label: "Individuos",
  },
};
