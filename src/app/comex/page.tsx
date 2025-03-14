import { PageTemplate } from "@/components/PageTemplate";
import { ComexPage } from "@/components/pages/comex/page";
import { Metadata } from "next";

const title = "Comercio Exterior con asesoría experta|Banco de Comercio";
const description =
  "Operá con especialistas en COMEX, accedé a soluciones personalizadas para importación, exportación y financiación en dólares y euros. Gestión eficiente y segura.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <ComexPage />
    </PageTemplate>
  );
}
