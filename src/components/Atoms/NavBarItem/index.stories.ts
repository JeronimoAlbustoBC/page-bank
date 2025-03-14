// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { NavBarItem } from "./index";

const meta: Meta<typeof NavBarItem> = {
  title: "Atoms/NavBarItem",
  component: NavBarItem,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof NavBarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    active: false,
    label: "Empresas",
    subitems: [],
  },
};

export const Active: Story = {
  args: {
    id: "id",
    active: true,
    label: "Individuos",
  },
};

export const SubItemsClosed: Story = {
  args: {
    id: "1",
    active: false,
    label: "Inversiones",
    subitems: [{ id: "1", active: false, label: "Cuentas", onClick: () => {} }],
  },
};

export const SubItemsOpened: Story = {
  args: {
    id: "1",
    active: true,
    label: "Individuos",
    subitems: [{ id: "1", active: false, label: "Cuentas", onClick: () => {} }],
  },
};

export const SubItemsMultiLevel: Story = {
  args: {
    id: "1",
    active: true,
    label: "Individuos",
    subitems: [
      {
        id: "12",
        active: false,
        label: "Cuentas",
        onClick: () => {},
        subitems: [
          { id: "1", active: false, label: "Subitem", onClick: () => {} },
        ],
      },
    ],
  },
};
