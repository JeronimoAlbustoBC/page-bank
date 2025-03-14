import { FinanciamientoPage } from "@/components/pages/financiamiento/page";
import { PageTemplate } from "@/components/PageTemplate";
import { Metadata } from "next";

const title = "Préstamos personalizados para empresas|Banco de Comercio";
const description =
  "Accedé a préstamos adaptados a las necesidades de tu negocio. Soluciones financieras rápidas y especializadas para capital de trabajo y proyectos.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <FinanciamientoPage />
    </PageTemplate>
  );
}
