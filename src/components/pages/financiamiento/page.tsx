"use client";
import styles from "./page.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import messages from "@/../messages/pages/financiamiento.json";
import { HeroSection } from "@/components/Organisms/HeroSection";
import { Apartment } from "@/components/Atoms/Icons/svgs/Apartment";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { MarqueeSection } from "@/components/Organisms/MarqueeSection";
import { FinanciamientoPrestamos } from "@/components/FinanciamientoComponents/Prestamos";
import { InfoCard } from "@/components/Molecules/InfoCard";
import { LocalShipping } from "@/components/Atoms/Icons/svgs/LocalShipping";
import { Store } from "@/components/Atoms/Icons/svgs/Store";
import { Calificanos } from "@/components/Organisms/Calificanos";
import { getIcon } from "@/components/Atoms/Icons";

export function FinanciamientoPage() {
  const { t } = useRichTranslations("Content.financiamiento");
  const solucionesMarqueeList = messages.soluciones.marquee.list;
  const heroList = messages.hero.list;

  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="financiamiento.hero"
        titleMaxWidth="680px"
        colorShade="agro"
        list={heroList}
      />
      <div className={styles.consultaContainer}>
        <Calificanos page={"financiamiento.calificamos"} />
      </div>

      <FinanciamientoPrestamos />
      <div className={styles.greenBox}>
        <div className={styles.content}>
          <Typography
            variant="h1"
            textAlign="left"
            color="color-navy-blue-800"
            weight="bold"
          >
            {t("soluciones.title")}
          </Typography>
        </div>
        <div className={styles.marqueeContainer}>
          <MarqueeSection
            items={Object.values(solucionesMarqueeList)}
            color="color-green-300"
            backgroundColor="color-green-900"
          />
        </div>
        <div className={styles.content}>
          <Typography
            variant="h5"
            textAlign="left"
            color="color-navy-blue-800"
            weight="600"
          >
            {t("soluciones.text")}
          </Typography>
        </div>
        <div className={styles.content}>
          <div className={styles.cards}>
            <InfoCard
              icon={getIcon(t("soluciones.cards.one.icon"), {
                className: styles.icon,
              })}
              imageHeight={100}
              title={t(`soluciones.cards.one.title`)}
              buttonText={t(`soluciones.cards.one.ctaText`)}
              buttonLink={t(`soluciones.cards.one.ctaLink`)}
              alignItems={"center"}
              titleVariant="subtitle3"
              className={styles.card}
            >
              <Typography
                variant="body1"
                textAlign="center"
                color="color-dark-gray-900"
              >
                {t(`soluciones.cards.one.text`)}
              </Typography>
            </InfoCard>
            <InfoCard
              icon={getIcon(t("soluciones.cards.two.icon"), {
                className: styles.icon,
              })}
              imageHeight={100}
              title={t(`soluciones.cards.two.title`)}
              buttonText={t(`soluciones.cards.two.ctaText`)}
              buttonLink={t(`soluciones.cards.two.ctaLink`)}
              alignItems={"center"}
              titleVariant="subtitle3"
              className={styles.card}
            >
              <Typography
                variant="body1"
                textAlign="center"
                color="color-dark-gray-900"
              >
                {t(`soluciones.cards.two.text`)}
              </Typography>
            </InfoCard>
            <InfoCard
              icon={getIcon(t("soluciones.cards.three.icon"), {
                className: styles.icon,
              })}
              imageHeight={100}
              title={t(`soluciones.cards.three.title`)}
              buttonText={t(`soluciones.cards.three.ctaText`)}
              buttonLink={t(`soluciones.cards.three.ctaLink`)}
              alignItems={"center"}
              titleVariant="subtitle3"
              className={styles.card}
            >
              <Typography
                variant="body1"
                textAlign="center"
                color="color-dark-gray-900"
              >
                {t(`soluciones.cards.three.text`)}
              </Typography>
            </InfoCard>
            <InfoCard
              icon={getIcon(t("soluciones.cards.four.icon"), {
                className: styles.icon,
              })}
              imageHeight={100}
              title={t(`soluciones.cards.four.title`)}
              buttonText={t(`soluciones.cards.four.ctaText`)}
              buttonLink={t(`soluciones.cards.four.ctaLink`)}
              alignItems={"center"}
              titleVariant="subtitle3"
              className={styles.card}
            >
              <Typography
                variant="body1"
                textAlign="center"
                color="color-dark-gray-900"
              >
                {t(`soluciones.cards.four.text`)}
              </Typography>
            </InfoCard>
          </div>
        </div>
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.content}>
          <Typography
            variant="h1"
            textAlign="center"
            color="color-navy-blue-800"
            weight="bold"
          >
            {t("financiacion.title")}
          </Typography>
        </div>
        <div className={styles.content}>
          <div className={styles.cards}>
            <InfoCard
              icon={getIcon(t("financiacion.list.one.icon"), {
                className: styles.icon,
              })}
              imageHeight={100}
              title={t(`financiacion.list.one.title`)}
              buttonText={t(`financiacion.list.one.ctaText`)}
              buttonLink={t(`financiacion.list.one.ctaLink`)}
              alignItems={"center"}
              titleVariant="h4"
              className={styles.card}
              buttonVariant="primary"
            >
              <Typography
                variant="h4"
                textAlign="center"
                color="color-dark-gray-900"
                className={styles.text}
              >
                {t(`financiacion.list.one.text`)}
              </Typography>
            </InfoCard>
            <InfoCard
              icon={getIcon(t("financiacion.list.two.icon"), {
                className: styles.icon,
              })}
              imageHeight={100}
              title={t(`financiacion.list.two.title`)}
              buttonText={t(`financiacion.list.two.ctaText`)}
              buttonLink={t(`financiacion.list.two.ctaLink`)}
              alignItems={"center"}
              titleVariant="h4"
              className={styles.card}
              buttonVariant="primary"
            >
              <Typography
                variant="h4"
                textAlign="center"
                color="color-dark-gray-900"
                className={styles.text}
              >
                {t(`financiacion.list.two.text`)}
              </Typography>
            </InfoCard>
          </div>
        </div>
      </div>
      <div className={styles.darkGreenBox}>
        <div className={styles.content}>
          <Typography
            variant="h1"
            textAlign="center"
            color="color-white"
            weight="bold"
          >
            {t("propuesta.title")}
          </Typography>
        </div>
        <div className={styles.content}>
          <div className={styles.cards}>
            <InfoCard
              icon={
                <Apartment className={styles.icon} width={70} height={70} />
              }
              imageHeight={100}
              title={t(`propuesta.list.one.title`)}
              buttonText={t(`propuesta.list.one.ctaText`)}
              buttonLink={t(`propuesta.list.one.ctaLink`)}
              alignItems={"center"}
              titleVariant="h4"
              className={styles.card}
              buttonVariant="secondary"
            >
              <Typography
                variant="body1"
                textAlign="center"
                color="color-dark-gray-900"
              >
                {t(`propuesta.list.one.text`)}
              </Typography>
            </InfoCard>
            <InfoCard
              icon={<Store className={styles.icon} width={72} />}
              imageHeight={100}
              title={t(`propuesta.list.two.title`)}
              buttonText={t(`propuesta.list.two.ctaText`)}
              buttonLink={t(`propuesta.list.two.ctaLink`)}
              alignItems={"center"}
              titleVariant="h4"
              className={styles.card}
              buttonVariant="secondary"
            >
              <Typography
                variant="body1"
                textAlign="center"
                color="color-dark-gray-900"
              >
                {t(`propuesta.list.two.text`)}
              </Typography>
            </InfoCard>
            <InfoCard
              icon={
                <LocalShipping className={styles.icon} height={58} width={85} />
              }
              imageHeight={100}
              title={t(`propuesta.list.three.title`)}
              buttonText={t(`propuesta.list.three.ctaText`)}
              buttonLink={t(`propuesta.list.three.ctaLink`)}
              alignItems={"center"}
              titleVariant="h4"
              className={styles.card}
              buttonVariant="secondary"
            >
              <Typography
                variant="body1"
                textAlign="center"
                color="color-dark-gray-900"
              >
                {t(`propuesta.list.three.text`)}
              </Typography>
            </InfoCard>
          </div>
        </div>
      </div>
    </main>
  );
}
