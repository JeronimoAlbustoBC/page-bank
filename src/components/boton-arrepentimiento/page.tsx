"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import messages from "@/../messages/pages/botonDeArrepentimiento.json";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Card } from "@/components/Atoms/Card";
import { Typography } from "@/components/Atoms/Typography";
import Link from "next/link";

export function InfoPage() {
  const { t, tRich } = useRichTranslations("Content.informacionAlUsuario");
  const heroList = messages.hero.list;

  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="informacionAlUsuario.hero"
        titleMaxWidth="550px"
        list={heroList}
        colorShade="light-gray"
      />
      <div className={styles.subhero}>
        <Card padding="xl" className={styles.card}>
          <Typography
            variant="h5"
            textAlign="left"
            color="color-navy-blue-800"
            weight="bold"
          >
            {t("subhero.title")}
          </Typography>
          <Typography
            variant="body1"
            textAlign="left"
            color="color-navy-blue-800"
          >
            {t("subhero.text")}
          </Typography>
        </Card>
      </div>
    </main>
  );
}
