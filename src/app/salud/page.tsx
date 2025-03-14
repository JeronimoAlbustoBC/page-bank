import { PageTemplate } from "@/components/PageTemplate";
import { SaludPage } from "@/components/pages/salud/page";
import { Metadata } from "next";

const title = "Soluciones financieras para el sector salud|Banco de Comercio";
const description =
  "Previsibilidad y financiación para tu centro de salud con factoring, cuentas bonificadas y alianzas estratégicas. Mejorá la gestión de tu caja y operaciones.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <SaludPage />
    </PageTemplate>
  );
}
