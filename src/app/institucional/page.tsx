import { PageTemplate } from "@/components/PageTemplate";
import InstitucionalPage from "@/components/pages/institucional/page";
import { Metadata } from "next";

const title = "Banco de Comercio|Más de 64 años de Experiencia";
const description =
  "Con 64 años de experiencia, Banco de Comercio ofrece soluciones financieras innovadoras y personalizadas. Descubrí nuestra misión, visión y valores.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <InstitucionalPage />
    </PageTemplate>
  );
}
