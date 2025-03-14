"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import messages from "@/../messages/pages/inversiones.json";
import { useRouter } from "next/navigation";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Button } from "@/components/Atoms/Button";
import { Typography } from "@/components/Atoms/Typography";
import { Card } from "@/components/Atoms/Card";
import { getIcon } from "@/components/Atoms/Icons";
import { InfoSection } from "@/components/Organisms/InfoSection";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";

export function InversionesPage() {
  const heroList = messages.hero.list;
  const featureList = messages.features.list;
  const feature2List = messages.features2.list;
  const conocenosCards = messages.conocenos.list;
  const router = useRouter();
  const { t, tRich } = useRichTranslations("Content.inversiones");
  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="inversiones.hero"
        titleMaxWidth="650px"
        list={heroList}
        colorShade="light-gray"
      />
      <div className={styles.subhero}>
        <InfoSection variant="one" page={`inversiones.subhero`}>
          <div className={styles.section}>
            <Typography
              variant={"h3"}
              textAlign="left"
              color={"color-navy-blue-900"}
              weight="500"
            >
              {tRich(`subhero.title`)}
            </Typography>
            <Typography
              variant={"subtitle3"}
              textAlign="left"
              weight="600"
              color={"color-navy-blue-900"}
            >
              {tRich(`subhero.text`)}
            </Typography>
          </div>
        </InfoSection>
      </div>
      <div className={styles.features}>
        <Typography
          variant="h3"
          textAlign="left"
          color="color-navy-blue-900"
          className={styles.title}
          weight="bold"
        >
          {t(`features.title`)}
        </Typography>
        <div className={styles.content}>
          {Object.keys(featureList).map((key) => (
            <Card padding="sm" key={key} className={styles.card}>
              {getIcon(t(`features.list.${key}.icon`), {
                width: 75,
                className: styles.icon,
              })}
              <Typography
                variant="subtitle3"
                textAlign="center"
                color="color-navy-blue-900"
                className={styles.text}
              >
                {t(`features.list.${key}.text`)}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
      <div className={styles.features2}>
        <div className={styles.content}>
          <Typography
            variant="h3"
            textAlign="left"
            color="color-navy-blue-900"
            className={styles.title}
            weight="bold"
          >
            {t(`features2.title`)}
          </Typography>
          <div className={styles.list}>
            {Object.keys(feature2List).map((key) => (
              <Card padding="lg" key={key} className={styles.card}>
                <div className={styles.icon}>
                  {getIcon(t(`features2.list.${key}.icon`), {
                    width: 75,
                  })}
                </div>
                <div className={styles.cardContent}>
                  <Typography
                    variant="h4"
                    textAlign="left"
                    color="color-navy-blue-800"
                    className={styles.title}
                  >
                    {t(`features2.list.${key}.title`)}
                  </Typography>
                  <Typography
                    variant="subtitle3"
                    textAlign="left"
                    color="color-dark-gray-900"
                    className={styles.text}
                  >
                    {tRich(`features2.list.${key}.text`)}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
          <Button
            variant="secondary"
            className={styles.cta}
            onClick={() => {
              setDropdownValue("Inversiones");
              router.push(t(`features2.ctaLink`));
            }}
          >
            {t(`features2.ctaText`)}
          </Button>

          <Button
            variant="secondary"
            className={styles.cta}
            onClick={() => {
              setDropdownValue("Inversiones");
              router.push(t(`features3.ctaLink`));
            }}
          >
            {t(`features3.ctaText`)}
          </Button>
        </div>
      </div>
      <div className={styles.conocenos}>
        <div className={styles.content}>
          <Typography
            variant={"h3"}
            textAlign="left"
            className={styles.title}
            color={"color-navy-blue-900"}
            weight="bold"
          >
            {t("conocenos.title")}
          </Typography>
          <div className={styles.cards}>
            {Object.keys(conocenosCards).map((card, index) => {
              return (
                <Card key={index} padding="md" className={styles.card}>
                  <div className={styles.icon}>
                    {getIcon(t(`conocenos.list.${card}.icon`), {
                      width: 66,
                      height: 60,
                      className: styles.icon,
                    })}
                  </div>
                  <Typography
                    variant="subtitle3"
                    color={"navy-blue-800"}
                    textAlign="left"
                    weight="bold"
                  >
                    {tRich(`conocenos.list.${card}.title`)}
                  </Typography>
                  <ul className={styles.list}>
                    {/* @ts-ignore */}
                    {Object.keys(conocenosCards[card].list).map((sub) => (
                      <li key={sub}>
                        <Typography
                          variant={"body1"}
                          textAlign="left"
                          color={"color-navy-blue-900"}
                        >
                          {t(`conocenos.list.${card}.list.${sub}`)}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="secondary"
                    className={styles.cta}
                    onClick={() =>
                      router.push(t(`conocenos.list.${card}.ctaLink`))
                    }
                  >
                    {t(`conocenos.list.${card}.ctaText`)}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
