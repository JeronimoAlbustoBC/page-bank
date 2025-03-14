"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import messages from "@/../messages/pages/informacionAlUsuario.json";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Card } from "@/components/Atoms/Card";
import { Typography } from "@/components/Atoms/Typography";
import Link from "next/link";

export function InfoPage() {
  const { t, tRich } = useRichTranslations("Content.informacionAlUsuario");
  const heroList = messages.hero.list;
  const subheroList = messages.subhero.list;

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
          <ul className={styles.list}>
            {Object.keys(subheroList).map((key) => (
              <li key={key}>
                <Link href={t(`subhero.list.${key}.link`)} target="__blank">
                  <Typography
                    variant="body1"
                    textAlign="left"
                    color="color-dark-gray-800"
                    className={styles.link}
                  >
                    {t(`subhero.list.${key}.text`)}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <div className={styles.sectionOne}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <Typography
              variant="h5"
              textAlign="left"
              color="color-navy-blue-900"
            >
              {t("sectionOne.leftTitle")}
            </Typography>
          </div>
          <div className={styles.rightSide}>
            <Typography
              variant="subtitle3"
              textAlign="left"
              color="color-navy-blue-900"
            >
              {t("sectionOne.title")}
            </Typography>
            <Typography
              variant="body1"
              textAlign="left"
              color="color-navy-blue-900"
            >
              {tRich("sectionOne.list")}
            </Typography>
            <Typography
              variant="body1"
              textAlign="left"
              color="color-navy-blue-900"
            >
              {tRich("sectionOne.text")}
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <Typography
              variant="h5"
              textAlign="left"
              color="color-navy-blue-900"
            >
              {t("sectionTwo.leftTitle")}
            </Typography>
          </div>
          <div className={styles.rightSide}>
            <Typography
              variant="body1"
              textAlign="left"
              color="color-navy-blue-900"
            >
              {tRich("sectionTwo.text")}
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}
