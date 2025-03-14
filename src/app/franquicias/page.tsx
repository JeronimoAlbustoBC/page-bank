import { FranquiciasPage } from "@/components/pages/franquicias/page";
import { PageTemplate } from "@/components/PageTemplate";
import { Metadata } from "next";

const title = "Financiamiento para Franquicias|Banco de Comercio";
const description =
  "Accedé a beneficios para tu franquicia con mínimos requisitos. Impulsá tu crecimiento con soluciones financieras especializadas.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Franquicias() {
  return (
    <PageTemplate>
      <FranquiciasPage />
    </PageTemplate>
  );
}
