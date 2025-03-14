import { PageTemplate } from "@/components/PageTemplate";
import { IndividuosPage } from "@/components/pages/individuos/page";
import { Metadata } from "next";

const title = "Soluciones Financieras para Individuos| Crecé con Nosotros";
const description =
  "Herramientas financieras rápidas y accesibles para vos y tu negocio. Accede a tu información online, obtené préstamos y gestioná tus cuentas fácilmente.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <IndividuosPage />
    </PageTemplate>
  );
}
