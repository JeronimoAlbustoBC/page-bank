import { PageTemplate } from "@/components/PageTemplate";
import { InfoPage } from "@/components/pages/informacion-al-usuario/page";
import { Metadata } from "next";

const title = "Información al usuario de servicio financiero|Banco de Comercio";
const description =
  "Impulsá el crecimiento de tu empresa con préstamos, leasing, factoring y COMEX del Banco de Comercio. Abrí tu cuenta y accedé a asesoramiento especializado.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <InfoPage />
    </PageTemplate>
  );
}
