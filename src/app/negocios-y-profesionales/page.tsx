import { PageTemplate } from "@/components/PageTemplate";
import NegociosYProfesionalesPage from "@/components/pages/negocios-y-profesionales/page";
import { Metadata } from "next";

const title = "Soluciones Financieras para Comercios|Banco de Comercio";
const description =
  "Mejorá tu operatoria comercial con préstamos, e-cheq, tarjeta corporativa y terminal de Captura. Aceptá todos los medios de pago y optimizá tus cobros.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <NegociosYProfesionalesPage />
    </PageTemplate>
  );
}
