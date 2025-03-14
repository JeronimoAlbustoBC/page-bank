// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { HorizontalInfoCard } from "./index";
import { Typography } from "@/components/Atoms/Typography";
import { LongCard } from "@/components/Atoms/Icons/svgs/LongCard";
import { Contract } from "@/components/Atoms/Icons/svgs/Contract";

const meta: Meta<typeof HorizontalInfoCard> = {
  title: "Molecules/HorizontalInfoCard",
  component: HorizontalInfoCard,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof HorizontalInfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Prestamo: Story = {
  args: {
    title: "Solicitá tu Proforma",
    icon: <LongCard />,
    children: (
      <>
        <Typography
          weight="bold"
          variant="body1"
          textAlign="left"
          color="color-dark-gray-900"
        >
          Fácil y Rápido:
        </Typography>
        <Typography
          variant="body1"
          textAlign="left"
          color="color-dark-gray-900"
        >
          Proporcioná una proforma válida de los rodados que necesitas. 
        </Typography>
      </>
    ),
  },
};

export const Contratos: Story = {
  args: {
    title: "Firmamos el contrato",
    icon: <Contract />,
    children: (
      <>
        <Typography
          weight="bold"
          variant="body1"
          textAlign="left"
          color="color-dark-gray-900"
        >
          Proceso Simplificado:
        </Typography>
        <Typography
          variant="body1"
          textAlign="left"
          color="color-dark-gray-900"
        >
          Una vez aprobada la proforma, solo necesitas firmar el contrato de
          leasing para que formalicemos el acuerdo. 
        </Typography>
      </>
    ),
  },
};
