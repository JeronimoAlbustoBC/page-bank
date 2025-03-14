import { PageTemplate } from "@/components/PageTemplate";
import { SolucionesParaEmpresasPage } from "@/components/pages/soluciones-para-empresas/page";
import { Metadata } from "next";

const title = "Soluciones ágiles para empresas|Banco de Comercio";
const description =
  "Optimizá cobros y pagos, gestioná tu billetera virtual y operá con COMEX. Accedé a financiamiento y liquidez instantánea para hacer crecer tu empresa.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default function SolucionesParaEmpresas() {
  return (
    <PageTemplate>
      <SolucionesParaEmpresasPage />
    </PageTemplate>
  );
}
