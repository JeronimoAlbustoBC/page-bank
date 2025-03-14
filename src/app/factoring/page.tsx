import { PageTemplate } from "@/components/PageTemplate";
import { FactoringPage } from "@/components/pages/factoring/page";
import { Metadata } from "next";

const title = "Factoring para Pymes|Liquidez Inmediata con Banco de Comercio";
const description =
  "Obtén liquidez instantánea con nuestro servicio de factoring. Convierte tus facturas pendientes en efectivo y financia tus proyectos sin requisitos adicionales.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <FactoringPage />
    </PageTemplate>
  );
}
