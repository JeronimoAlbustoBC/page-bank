import { PageTemplate } from "@/components/PageTemplate";
import { LeasingPage } from "@/components/pages/leasing/page";
import { Metadata } from "next";

const title = "Leasing de Rodados para tu Empresa|Banco de Comercio";
const description =
  "Renová tu flota con financiamiento 100%, plazo de 36 meses, y deducción de gastos. Elegí entre tasa fija o variable y asegurá tu crecimiento.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <LeasingPage />
    </PageTemplate>
  );
}
