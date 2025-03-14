import { PageTemplate } from "@/components/PageTemplate";
import { BotonDeArrepentimientoPage } from "@/components/pages/boton-de-arrepentimiento/page";
import { Metadata } from "next";

const title = "Boton de Arrepentimiento|Banco de Comercio";
const description =
  "Boton de Arrepentimiento";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  return (
    <PageTemplate>
      <BotonDeArrepentimientoPage />
    </PageTemplate>
  );
}
