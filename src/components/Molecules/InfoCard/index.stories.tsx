// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { InfoCard } from "./index";
import { Typography } from "@/components/Atoms/Typography";

const meta: Meta<typeof InfoCard> = {
  title: "Molecules/InfoCard",
  component: InfoCard,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof InfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Franquicias: Story = {
  args: {
    imageSrc: "/images/franquicias.png",
    imageAlt: "Franquicias",
    title: "Franquicias",
    children: (
      <Typography variant="h4" textAlign="center">
        Accedé a financiamiento con mínimos requisitos y escalá tu inversión.
      </Typography>
    ),
    buttonText: "Conocé Más",
    buttonLink: "",
    alignItems: "center",
  },
};

export const Apis: Story = {
  args: {
    imageSrc: "/images/apis.png",
    imageAlt: "APIS",
    title: "APIS",
    children: (
      <div
        style={{
          padding: "0 32px 0 40px",
          fontFamily: "var(--typography-default-font-family)",
          lineHeight: "1.5",
        }}
      >
        <ul>
          <li>
            Efectúa pagos masivos y programados a toda tu nómina y proveedores,
            facilitando su gestión interna y externa.
          </li>
          <li>
            Recaudá de manera ágil tus cuotas mensuales e identificá de manera
            precisa toda la información de las cuentas de tus asociados y
            proveedores.
          </li>
          <li>
            Robustecé tu seguridad financiera preveniendo fraudes y estafas por
            medio de nuestras diversas fuentes de información unificadas para tu
            uso.
          </li>
        </ul>
      </div>
    ),
    alignItems: "center",
  },
};

export const neogciosYProfesionales: Story = {
  args: {
    title: "Negocios Y Profesionales",
    titleVariant: "h4",
    children: (
      <div
        style={{
          padding: "0 32px 0 40px",
          fontFamily: "var(--typography-default-font-family)",
          lineHeight: "1.5",
          fontSize: "18px",
        }}
      >
        <ul>
          <li>
            Con BDC Conecta resolvé tu gestión eficiente y automática de
            tesorería y contabilidad, a la vez que reducís riesgos de fraude y
            estafas.
          </li>
          <li>
            Calificamos tu cuenta en 72 hs y te brindamos hasta 100 millones en
            financiamiento para capital de trabajo
          </li>
          <li>Factoring.</li>
        </ul>
      </div>
    ),
    alignItems: "left",
  },
};
