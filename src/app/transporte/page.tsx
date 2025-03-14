// import { PageTemplate } from "@/components/PageTemplate";
import { TransportePage } from "@/components/pages/transporte/page";
import { Metadata } from "next";

const title = "Servicios financieros para empresas|Banco de Comercio";
const description =
  "Impulsá el crecimiento de tu empresa con préstamos, leasing, factoring y COMEX del Banco de Comercio. Abrí tu cuenta y accedé a asesoramiento especializado.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function Page() {
  // const renovarList = messages.renovar.list;
  // const descuentoList = messages.descuento.list;
  return <TransportePage />;
  // return (
  //   <PageTemplate>
  //     <TransportePage />
  //   </PageTemplate>
  // );
}
