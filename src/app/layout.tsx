import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "animate.css/animate.compat.css";
import "@/app/global.css";
import { GoogleTagManager } from '@next/third-parties/google'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:title"
          content="Banco De Comercio | Atención exclusiva para PYMES"
        />
        <meta
          property="og:description"
          content="Anterior Siguiente 65 años de Experiencia En la Industria Financiera Banco de Comercio es la suma de más de 64 años de experiencia en la industria financiera afrontando los más diversos escenarios y sosteniendo los valores de servicio al cliente y mejora continua de procesos. Atención Personalizada. Asesoramiento Financiero. Línea de Atención Exclusiva para Empresas. […]"
        /> */}
        <meta property="og:url" content="https://bancodecomercio.com.ar/" />
        <meta property="og:site_name" content="Banco De Comercio" />
        {/* <meta
          property="og:image"
          content="https://bancodecomercio.com.ar/wp-content/uploads/2024/06/lea-desk.png"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      {/*TODO: Yont Modifica e incorpora el tag manager de google 21/11/2024 00:35*/}
      <GoogleTagManager gtmId="GTM-P4268GXS" />
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}