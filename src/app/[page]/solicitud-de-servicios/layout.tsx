import type { Metadata } from "next";
import "@/app/global.css";

const title = "Servicios financieros para empresas|Banco de Comercio";
const description =
  "Impulsá el crecimiento de tu empresa con préstamos, leasing, factoring y COMEX del Banco de Comercio. Abrí tu cuenta y accedé a asesoramiento especializado.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: { title: title, description: description },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Banco De Comercio | Atención exclusiva para PYMES"
        />
        <meta
          property="og:description"
          content="Anterior Siguiente 65 años de Experiencia En la Industria Financiera Banco de Comercio es la suma de más de 64 años de experiencia en la industria financiera afrontando los más diversos escenarios y sosteniendo los valores de servicio al cliente y mejora continua de procesos. Atención Personalizada. Asesoramiento Financiero. Línea de Atención Exclusiva para Empresas. […]"
        />
        <meta property="og:url" content="https://bancodecomercio.com.ar/" />
        <meta property="og:site_name" content="Banco De Comercio" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
