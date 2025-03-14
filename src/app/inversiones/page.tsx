import { PageTemplate } from "@/components/PageTemplate";
import { InversionesPage } from "@/components/pages/inversiones/page";
import { Metadata } from "next";

const title = "Inversiones Ágiles y Rentables|Fondos y Financiamiento";
const description =
  "Invierte en Fondos Comunes con facilidad y sin monto mínimo. Accede a asesoría profesional, diversifica tu patrimonio y obtén rendimientos rápidos.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <InversionesPage />
    </PageTemplate>
  );
}
