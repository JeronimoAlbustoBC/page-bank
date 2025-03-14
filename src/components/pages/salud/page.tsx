"use client";
import styles from "./page.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import messages from "@/../messages/pages/salud.json";
import { HeroSection } from "@/components/Organisms/HeroSection";
import { InfoSection } from "@/components/Organisms/InfoSection";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import { Apartment } from "@/components/Atoms/Icons/svgs/Apartment";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { MarqueeSection } from "@/components/Organisms/MarqueeSection";
import { Slider } from "@/components/Molecules/Slider";
import { useState } from "react";
import { SaludFactoring } from "@/components/SaludComponents/Factoring";
import classNames from "classnames";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";
import { ToolCard } from "../comex/ToolCard";
import { getIcon } from "@/components/Atoms/Icons";
import { Card } from "@/components/Atoms/Card";

export function SaludPage() {
  const { t, tRich } = useRichTranslations("Content.salud");
  const router = useRouter();
  const heroList = messages.hero.list;
  const marqueeList = messages.marquee.list;
  const consultaBanners = messages.consulta.list;
  const tabs = messages.tabs;
  const cuentaList = messages.cuenta.two.list;
  const propuestasCards = messages.propuestas.list;

  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs.content)[0]);
  const [activeConsulta, setActiveConsulta] = useState(
    Object.keys(consultaBanners)[0]
  );
  return (
    <main className={styles.main}>
      <HeroSection
        variant="three"
        page="salud.hero"
        titleMaxWidth="594px"
        colorShade="agro"
        list={heroList}
      />
      <MarqueeSection
        items={Object.values(marqueeList)}
        color="color-agro-100"
        backgroundColor="color-agro-600p"
      />
      <div className={styles.infoSection}>
        <InfoSection variant="one" page="salud.sectionOne">
          <div className={styles.section}>
            <Typography
              variant="h1"
              textAlign="left"
              color="color-navy-blue-800"
              weight="bold"
            >
              {t("sectionOne.title")}
            </Typography>

            <Typography
              variant="subtitle3"
              textAlign="left"
              color="color-navy-blue-800"
              weight="600"
            >
              {tRich("sectionOne.text")}
            </Typography>
          </div>
        </InfoSection>
      </div>
      <div className={styles.account}>
        <div className={styles.greenBackground}></div>
        <InfoSection variant="one" page={`salud.cuenta`}>
          <div className={styles.section}>
            <div className={styles.sectionOne}>
              <Typography
                variant={"h3"}
                textAlign="left"
                color={"color-white"}
                weight="bold"
              >
                {tRich(`cuenta.one.title`)}
              </Typography>
              <Button
                variant={"primary"}
                onClick={() => {
                  setDropdownValue(t(`cuenta.one.formDefault`));
                  router.push(t("cuenta.one.ctaLink"));
                }}
              >
                {t("cuenta.one.ctaText")}
              </Button>
            </div>

            <div className={styles.sectionTwo}>
              <Typography
                variant={"subtitle3"}
                textAlign="left"
                color={"color-navy-blue-900"}
                weight="bold"
              >
                {tRich(`cuenta.two.text`)}
              </Typography>
              <ul className={styles.list}>
                {Object.keys(cuentaList).map((key) => (
                  <li key={key}>
                    <Typography
                      variant={"subtitle3"}
                      textAlign="left"
                      color={"color-navy-blue-900"}
                    >
                      {tRich(`cuenta.two.list.${key}`)}
                    </Typography>
                  </li>
                ))}
              </ul>
              <div className={styles.buttons}>
                <Button
	          className="btn_whatsapp"
                  variant={"primary"}
                  onClick={() => {
                    setDropdownValue(t(`cuenta.two.formDefault`));
                    router.push(t("cuenta.two.ctaLink"));
                  }}
                >
                  {t("cuenta.two.ctaText")}
                </Button>
                <Button
                  variant={"secondary"}
                  onClick={() => router.push(t("cuenta.two.secondaryCtaLink"))}
                >
                  {t("cuenta.two.secondaryCtaText")}
                </Button>
              </div>
            </div>
          </div>
        </InfoSection>
      </div>
      <SaludFactoring />
      <div className={styles.infoSection1}>
        <InfoSection variant="one" page="salud.alianza">
          <div className={styles.section}>
            <Typography
              variant="h1"
              textAlign="left"
              color="color-navy-blue-800"
              weight="bold"
            >
              {t("alianza.title")}
            </Typography>
            <Typography
              variant="h4"
              textAlign="left"
              className={styles.uppercase}
              color="color-navy-blue-800"
              weight="bold"
            >
              {t("alianza.subtitle")}
            </Typography>
            <Typography
              variant="subtitle3"
              textAlign="left"
              color="color-navy-blue-800"
              weight="600"
            >
              {tRich("alianza.text")}
            </Typography>
          </div>
        </InfoSection>
      </div>
      <div className={styles.consultaContainer}>
        <Slider
          activeStep={activeConsulta}
          setActiveStep={setActiveConsulta}
          colorShade="agro"
          page="salud.consulta"
          list={Object.keys(consultaBanners)}
        >
          {Object.keys(consultaBanners).map((key, index) => (
            <div key={key} className={styles.bannerItem}>
              <InfoSection variant="one" page={`salud.consulta.list.${key}`}>
                <div className={styles.section}>
                  <Typography
                    variant={index === 0 ? "h1" : "h3"}
                    textAlign="left"
                    color={t(`consulta.list.${key}.color`)}
                    weight="bold"
                  >
                    {tRich(`consulta.list.${key}.text`)}
                  </Typography>
                  <Button
                    variant={index === 0 ? "primary" : "secondary"}
                    onClick={() =>
                      router.push(t(`consulta.list.${key}.ctaLink`))
                    }
                  >
                    {t(`consulta.list.${key}.ctaText`)}
                  </Button>
                </div>
              </InfoSection>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.greenBox}>
        <div className={styles.content}>
          <div className={styles.text}>
            <Typography
              variant="h1"
              textAlign="left"
              color="color-navy-blue-800"
              weight="bold"
            >
              {t("necesidades.title")}
            </Typography>
          </div>
          <div className={styles.icons}>
            <Apartment />
          </div>
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={styles.tabsContainer}>
          {Object.keys(tabs.list).map((key) => (
            <Button
              variant="tertiary"
              key={key}
              onClick={() => setSelectedTab(key)}
              className={classNames(styles.tabLabel, {
                [styles.active]: selectedTab === key,
              })}
            >
              {t(`tabs.list.${key}`)}
            </Button>
          ))}
        </div>
        <div className={styles.tabsContent}>
          <InfoSection variant="one" page={`salud.tabs.content.${selectedTab}`}>
            <div className={styles.section}>
              <Typography
                variant={"h3"}
                textAlign="left"
                color={"color-navy-blue-900"}
                weight="bold"
              >
                {tRich(`tabs.content.${selectedTab}.title`)}
              </Typography>
              <ul className={styles.list}>
                {/* @ts-ignore */}
                {Object.keys(tabs.content[selectedTab].list).map((sub) => (
                  <li key={sub}>
                    <Typography
                      variant={"body1"}
                      textAlign="left"
                      color={"color-navy-blue-900"}
                    >
                      {t(`tabs.content.${selectedTab}.list.${sub}`)}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </InfoSection>
        </div>
      </div>
      <div className={styles.propuestas}>
        <div className={styles.content}>
          <Typography
            variant={"h3"}
            textAlign="left"
            className={styles.title}
            color={"color-navy-blue-900"}
            weight="bold"
          >
            {tRich("propuestas.title")}
          </Typography>
          <div className={styles.cards}>
            {Object.keys(propuestasCards).map((card, index) => {
              return (
                <Card key={index} padding="md" className={styles.card}>
                  <div className={styles.icon}>
                    {getIcon(t(`propuestas.list.${card}.icon`), {
                      width: 66,
                      className: styles.icon,
                    })}
                  </div>
                  <Typography
                    variant="subtitle3"
                    color={"navy-blue-900"}
                    textAlign="left"
                    weight="800"
                  >
                    {tRich(`propuestas.list.${card}.title`)}
                  </Typography>
                  <Typography
                    variant="body1"
                    color={"navy-blue-900"}
                    textAlign="left"
                  >
                    {tRich(`propuestas.list.${card}.text`)}
                  </Typography>

                  {t(`propuestas.list.${card}.ctaText`) && (
                    <Button
                      variant="secondary"
                      className={styles.cta}
                      onClick={() =>
                        router.push(t(`propuestas.list.${card}.ctaLink`))
                      }
                    >
                      {t(`propuestas.list.${card}.ctaText`)}
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
