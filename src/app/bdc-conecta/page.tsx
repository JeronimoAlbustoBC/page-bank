import { PageTemplate } from "@/components/PageTemplate";
import { BDCConectaPage } from "@/components/pages/bdc-conecta/page";
import { Metadata } from "next";

const title = "Optimizá tus cobros y pagos con APIs|Banco de Comercio";
const description =
  "Automatizá pagos, cobros y gestión de cuentas con nuestras soluciones bancarias. Optimización y seguridad para tu empresa. Conocé más ahora.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <BDCConectaPage />
    </PageTemplate>
  );
}
