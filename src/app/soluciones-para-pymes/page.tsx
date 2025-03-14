import { PageTemplate } from "@/components/PageTemplate";
import { SolucionesParaPymesPage } from "@/components/pages/soluciones-para-pymes/page";
import { Metadata } from "next";

const title = "Soluciones Financieras para Pymes|Banco de Comercio";
const description =
  "Impulsá el crecimiento de tu pyme con COMEX, descuento de cheques, préstamos para capital de trabajo, inversiones y leasing 100% financiado.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <SolucionesParaPymesPage />
    </PageTemplate>
  );
}
