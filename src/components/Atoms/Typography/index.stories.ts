// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./index";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TypographyBody1: Story = {
  args: { children: "Some text", variant: "body1" },
};
export const TypographyBody2: Story = {
  args: { children: "Some text", variant: "body2" },
};
export const TypographyBody3: Story = {
  args: { children: "Some text", variant: "body3" },
};
export const TypographyCaption: Story = {
  args: { children: "Some text", variant: "caption" },
};
export const TypographyA: Story = {
  args: {
    children: "Some link text",
    variant: "a",
    href: "https://www.google.com/",
  },
};
export const TypographyH5: Story = {
  args: { children: "Some h5 text", variant: "h5" },
};
export const TypographyH4: Story = {
  args: { children: "Some h4 text", variant: "h4" },
};
export const TypographyH3: Story = {
  args: { children: "Some h3 text", variant: "h3" },
};
export const TypographyH2: Story = {
  args: { children: "Some h2 text", variant: "h2" },
};
export const TypographyH1: Story = {
  args: { children: "Some h1 text", variant: "h1" },
};
export const Subtitle1: Story = {
  args: { children: "Some h1 text", variant: "subtitle1" },
};
export const Subtitle2: Story = {
  args: { children: "Some h1 text", variant: "subtitle2" },
};
export const Subtitle3: Story = {
  args: { children: "Some h1 text", variant: "subtitle3" },
};
