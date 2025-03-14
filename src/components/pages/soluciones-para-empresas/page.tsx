"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import messages from "@/../messages/pages/solucionesParaEmpresas.json";
import { Typography } from "@/components/Atoms/Typography";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { ToolCard } from "./ToolCard";
import { Button } from "@/components/Atoms/Button";
import { getIcon } from "@/components/Atoms/Icons";
import { Card } from "@/components/Atoms/Card";
import { useRouter } from "next/navigation";

export function SolucionesParaEmpresasPage() {
  const { t, tRich } = useRichTranslations("Content.solucionesParaEmpresas");
  const list = messages.herramientas.list;
  const heroList = messages.hero.list;
  const ofrecemosCards = messages.ofrecemos.list;
  const router = useRouter();

  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="solucionesParaEmpresas.hero"
        titleMaxWidth="880px"
        list={heroList}
        colorShade="franquicias"
      />
      <div className={styles.tools}>
        <div className={styles.content}>
          <Typography
            variant="h1"
            textAlign="left"
            className={styles.toolsTitle}
            color="color-white"
            weight="bold"
          >
            {t("herramientas.title")}
          </Typography>
          <div className={styles.cards}>
            {Object.keys(list).map((item) => (
              <ToolCard key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.offering}>
        <Typography
          variant="h3"
          textAlign="center"
          className={styles.offeringTitle}
          weight="bold"
        >
          {t("ofrecemos.title")}
        </Typography>
        <div className={styles.cards}>
          {Object.keys(ofrecemosCards).map((card, index) => {
            const color = `var(--${t(`ofrecemos.list.${card}.color`)})`;
            return (
              <Card key={index} padding="md" className={styles.card}>
                <div className={styles.icon}>
                  {getIcon(t(`ofrecemos.list.${card}.icon`))}
                </div>
                <Typography
                  variant="h4"
                  color={color}
                  textAlign="center"
                  weight="bold"
                >
                  {t(`ofrecemos.list.${card}.title`)}
                </Typography>
                <div
                  className={styles.separator}
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
                <Typography variant="body1" color={color} textAlign="center">
                  {tRich(`ofrecemos.list.${card}.text`)}
                </Typography>
                <Button
                  variant="secondary"
                  onClick={() =>
                    router.push(t(`ofrecemos.list.${card}.ctaLink`))
                  }
                >
                  {t(`ofrecemos.list.${card}.ctaText`)}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
