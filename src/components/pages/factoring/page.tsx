"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import messages from "@/../messages/pages/Factoring.json";
import { Typography } from "@/components/Atoms/Typography";
import Image from "next/image";
import classNames from "classnames";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Card } from "@/components/Atoms/Card";
import { getIcon } from "@/components/Atoms/Icons";
import { IconWatermark } from "@/components/Atoms/Icons/IconWatermark";
import { FactoringArrow } from "@/components/Atoms/Icons/svgs/FactoringArrow";
import { FactoringLoopArrow } from "@/components/Atoms/Icons/svgs/FactoringLoopArrow";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";
import ScrollAnimation from "react-animate-on-scroll";

export function FactoringPage() {
  const router = useRouter();
  const { t, tRich } = useRichTranslations("Content.Factoring");
  const heroList = messages.hero.list;
  const list = messages.definicion.cards;
  const facturaslist = messages.facturas.cards;
  const propuestasList = messages.propuestas.list;
  const animatedSteps = messages.animated.cards;

  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="Factoring.hero"
        titleMaxWidth="550px"
        list={heroList}
        colorShade="light-gray"
      />
      <div className={styles.definition}>
        <Typography
          variant="h1"
          textAlign="left"
          className={styles.title}
          color="color-navy-blue-800"
          weight="bold"
        >
          {tRich("definicion.title")}
        </Typography>
        <Typography
          variant="subtitle3"
          textAlign="left"
          className={styles.text}
          color="color-navy-blue-800"
        >
          {tRich("definicion.text")}
        </Typography>
        
      </div>
      <div className={styles.animated}>
        <div className={styles.content}>
          <IconWatermark className={styles.logo} width={356} height={86} />
          {Object.keys(animatedSteps).map((key: string, index: number) => (
            <div
              key={key}
              className={classNames(styles.step, styles[key], [styles.animate])}
            >
              {index < Object.keys(animatedSteps).length - 1 && (
                <FactoringArrow className={styles.arrow} />
              )}
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className={styles.imageContainer}></div>
                <div className={styles.image}>
                  <Image
                    src={t(`animated.cards.${key}.image`)}
                    alt={"Paso 1"}
                    fill
                  />
                </div>
                <div className={styles.texts}>
                  <div className={styles.number}>
                    <Typography
                      variant="h5"
                      color="color--navy-blue-900"
                      textAlign="center"
                    >
                      {index + 1}
                    </Typography>
                  </div>
                  <Typography
                    variant="h3"
                    color="color-info-900"
                    textAlign="left"
                    className={styles.text}
                    weight="bold"
                  >
                    {t(`animated.cards.${key}.text`)}
                  </Typography>
                </div>
              </ScrollAnimation>
              {index === Object.keys(animatedSteps).length - 1 && (
                <FactoringLoopArrow className={styles.loopArrow} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.facturasPendientes}>
        <div className={styles.content}>
          <Typography
            variant="h1"
            textAlign="left"
            className={styles.title}
            color="color-navy-blue-800"
            weight="bold"
          >
            {tRich("facturas.title")}
          </Typography>
          <div className={styles.cards}>
            {Object.keys(facturaslist).map((key) => (
              <Card padding="sm" key={key} className={styles.card}>
                <div className={styles.iconContainer}>
                  {getIcon(t(`facturas.cards.${key}.icon`), {
                    width: 56,
                    height: 56,
                    className: styles.icon,
                  })}
                </div>
                <Typography
                  variant="subtitle3"
                  textAlign="center"
                  className={styles.text}
                  color="color-navy-blue-800"
                >
                  {tRich(`facturas.cards.${key}.title`)}
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  className={styles.text}
                  color="color-navy-blue-900"
                >
                  {tRich(`facturas.cards.${key}.text`)}
                </Typography>
              </Card>
            ))}
          </div>
          <Button
            variant="primary"
            onClick={() => {
              setDropdownValue("Factoring");
              router.push(t("facturas.ctaLink"));
            }}
          >
            {t("facturas.ctaText")}
          </Button>
        </div>
      </div>

      <div className={styles.offering}>
        <Typography
          variant="h3"
          textAlign="center"
          className={styles.offeringTitle}
          weight="bold"
        >
          {tRich("propuestas.title")}
        </Typography>
        <div className={styles.cards}>
          {Object.keys(propuestasList).map((card, index) => {
            const color = `var(--${t(`propuestas.list.${card}.color`)})`;
            return (
              <Card key={index} padding="md" className={styles.card}>
                <div className={styles.icon}>
                  {getIcon(t(`propuestas.list.${card}.icon`))}
                </div>
                <Typography
                  variant="h4"
                  color={color}
                  textAlign="center"
                  weight="bold"
                >
                  {t(`propuestas.list.${card}.title`)}
                </Typography>
                <div
                  className={styles.separator}
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
                <Typography variant="body1" color={color} textAlign="center">
                  {tRich(`propuestas.list.${card}.text`)}
                </Typography>
                <Button
                  variant="secondary"
                  onClick={() =>
                    router.push(t(`propuestas.list.${card}.ctaLink`))
                  }
                >
                  {t(`propuestas.list.${card}.ctaText`)}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
