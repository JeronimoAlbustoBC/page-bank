import { Metadata } from "next";
import { redirect } from "next/navigation";

const title = "Servicios financieros para empresas|Banco de Comercio";
const description =
  "Impulsá el crecimiento de tu empresa con préstamos, leasing, factoring y COMEX del Banco de Comercio. Abrí tu cuenta y accedé a asesoramiento especializado.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Home() {
  redirect("/inicio");
  return <></>;
}
