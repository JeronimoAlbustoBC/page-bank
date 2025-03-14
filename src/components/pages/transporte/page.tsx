"use client";
// import { HeroSection } from "@/components/Organisms/HeroSection";
// import styles from "./page.module.scss";
// import messages from "@/../messages/pages/transporte.json";
// import { PageTemplate } from "@/components/PageTemplate";
// import { InfoSection } from "@/components/Organisms/InfoSection";
// import { Button } from "@/components/Atoms/Button";
// import { Typography } from "@/components/Atoms/Typography";
// import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function TransportePage() {
  // const t = useTranslations("Content.transporte");
  const router = useRouter();
  // const renovarList = messages.renovar.list;
  // const descuentoList = messages.descuento.list;
  router.replace("/leasing");
  return null;

  // Pagina en pausa
  // return (
  //   <PageTemplate>
  //     <main className={styles.main}>
  //       <HeroSection variant="one" page="transporte" titleMaxWidth="715px" />
  //       <div className={styles.infoSection1}>
  //         <InfoSection variant="one" page="transporte.renovar">
  //           <div className={styles.section}>
  //             <Typography
  //               variant="h3"
  //               textAlign="left"
  //               className={styles.sectionTitle}
  //               color="color-navy-blue-800"
  //               weight="bold"
  //             >
  //               {t("renovar.title")}
  //             </Typography>
  //             <ul className={styles.content}>
  //               {Object.keys(renovarList).map((p, index) => (
  //                 <li key={index}>
  //                   <Typography
  //                     variant="body1"
  //                     textAlign="left"
  //                     color="color-navy-blue-800"
  //                   >
  //                     {t(`renovar.list.${p}`)}
  //                   </Typography>
  //                 </li>
  //               ))}
  //             </ul>

  //             <div>
  //               <Button
  //                 variant="primary"
  //                 onClick={() => router.push(t("renovar.ctaLink"))}
  //               >
  //                 {t("renovar.ctaText")}
  //               </Button>
  //             </div>
  //           </div>
  //         </InfoSection>
  //       </div>
  //       <div className={styles.infoSection2}>
  //         <InfoSection variant="one" page="transporte.descuento">
  //           <div className={styles.section}>
  //             <Typography
  //               variant="h3"
  //               textAlign="left"
  //               className={styles.sectionTitle}
  //               color="color-navy-blue-800"
  //               weight="bold"
  //             >
  //               {t("descuento.title")}
  //             </Typography>
  //             <ul className={styles.content}>
  //               {Object.keys(descuentoList).map((p, index) => (
  //                 <li key={index}>
  //                   <Typography
  //                     variant="body1"
  //                     textAlign="left"
  //                     color="color-navy-blue-800"
  //                   >
  //                     {t(`descuento.list.${p}`)}
  //                   </Typography>
  //                 </li>
  //               ))}
  //             </ul>

  //             <div>
  //               <Button
  //                 variant="primary"
  //                 onClick={() => router.push(t("descuento.ctaLink"))}
  //               >
  //                 {t("descuento.ctaText")}
  //               </Button>
  //             </div>
  //           </div>
  //         </InfoSection>
  //       </div>
  //     </main>
  //   </PageTemplate>
  // );
}
