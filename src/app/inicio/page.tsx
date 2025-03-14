import { PageTemplate } from "@/components/PageTemplate";
import { HomePage } from "@/components/pages/Home/page";
import { Metadata } from "next";

const title = "Servicios financieros para empresas|Banco de Comercio";
const description =
  "Impulsá el crecimiento de tu empresa con préstamos, leasing, factoring y COMEX del Banco de Comercio. Abrí tu cuenta y accedé a asesoramiento especializado.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Home() {
  return (
    <PageTemplate>
      <HomePage />
    </PageTemplate>
  );
}
