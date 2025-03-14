"use client";
import styles from "./page.module.scss";
import { PageTemplate } from "@/components/PageTemplate";
import { HeroSection } from "@/components/Organisms/HeroSection";
import messages from "@/../messages/pages/home.json";
import { MarqueeSection } from "@/components/Organisms/MarqueeSection";
import { InfoSection } from "@/components/Organisms/InfoSection";
import { Typography } from "@/components/Atoms/Typography";
import { useState } from "react";
import { TabItem } from "@/components/Atoms/TabItem";
import classnames from "classnames";
import { Card } from "@/components/Atoms/Card";
import { Calificanos } from "@/components/Organisms/Calificanos";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Atoms/Button";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Store } from "@/components/Atoms/Icons/svgs/Store";
import { Apartment } from "@/components/Atoms/Icons/svgs/Apartment";
import { getIcon } from "@/components/Atoms/Icons";
import { CreditCard } from "@/components/Atoms/Icons/svgs/CreditCard";

export function HomePage() {
  const list = messages.hero.list;
  const marqueeList = messages.marquee.list;
  const subheroTabs = messages.subhero.tabs;
  const subheroTabComercio = subheroTabs.content.comercios;
  const subheroTabPymes = subheroTabs.content.pymes;
  const subheroTabEmpresas = subheroTabs.content.empresas;

  const ofrecemosCards = messages.ofrecemos.list;

  const { t, tRich } = useRichTranslations("Content.home");
  const [activeSubheroTab, setActiveSubheroTab] = useState<
    "comercios" | "pymes" | "empresas"
  >("comercios");
  const router = useRouter();

  return (
    <main className={styles.main}>
      <HeroSection
        variant="three"
        list={list}
        page="home.hero"
        colorShade="navy-blue"
        titleMaxWidth="600px"
      />
      <MarqueeSection
        items={Object.values(marqueeList)}
        color="color-navy-blue-50"
        backgroundColor="color-navy-blue-300"
      />
      <div className={styles.infoSection1}>
        <InfoSection variant="one" page="home.subhero">
          <div className={styles.section}>
            <Typography
              variant="h1"
              textAlign="left"
              className={styles.sectionTitle}
              color="color-navy-blue-800"
              weight="bold"
            >
              {t("subhero.title")}
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="left"
              className={styles.sectionTitle}
              color="color-navy-blue-800"
              weight="bold"
            >
              {t("subhero.subtitle")}
            </Typography>

            <div className={styles.tabs}>
              {Object.keys(subheroTabs.titles).map((tab: string) => (
                <TabItem
                  key={tab}
                  active={false}
                  id={tab}
                  label={t(`subhero.tabs.titles.${tab}`)}
                  onClick={() => setActiveSubheroTab(tab as any)}
                  className={classnames(styles.tabItem, {
                    [styles.active]: activeSubheroTab === tab,
                  })}
                />
              ))}
            </div>
            <div className={styles.tabsContent}>
              {activeSubheroTab === "comercios" && (
                <Card
                  padding="md"
                  className={classnames(styles.content, styles.comercio, {
                    [styles.active]: activeSubheroTab === "comercios",
                  })}
                >
                  <Typography
                    variant="subtitle3"
                    textAlign="left"
                    color="color-navy-blue-900"
                    weight="bold"
                  >
                    {t(`subhero.tabs.content.comercios.title`)}
                  </Typography>
                  <ul>
                    {Object.keys(subheroTabComercio.list).map((item, index) => (
                      <li key={index}>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          color="color-dark-gray-900"
                          weight="normal"
                        >
                          {t(`subhero.tabs.content.comercios.list.${item}`)}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    onClick={() =>
                      router.push(t("subhero.tabs.content.comercios.ctaLink"))
                    }
                  >
                    {t("subhero.tabs.content.comercios.ctaText")}
                  </Button>
                  <CreditCard className={styles.icon} />
                </Card>
              )}
              {activeSubheroTab === "pymes" && (
                <Card
                  padding="md"
                  className={classnames(styles.content, styles.pymes, {
                    [styles.active]: activeSubheroTab === "pymes",
                  })}
                >
                  <Typography
                    variant="subtitle3"
                    textAlign="left"
                    color="color-navy-blue-900"
                    weight="bold"
                  >
                    {t(`subhero.tabs.content.pymes.title`)}
                  </Typography>
                  <ul>
                    {Object.keys(subheroTabPymes.list).map((item, index) => (
                      <li key={index}>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          color="color-dark-gray-900"
                          weight="normal"
                        >
                          {t(`subhero.tabs.content.pymes.list.${item}`)}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    onClick={() =>
                      router.push(t("subhero.tabs.content.pymes.ctaLink"))
                    }
                  >
                    {t("subhero.tabs.content.pymes.ctaText")}
                  </Button>
                  <Store className={styles.icon} />
                </Card>
              )}
              {activeSubheroTab === "empresas" && (
                <Card
                  padding="md"
                  className={classnames(styles.content, styles.empresas, {
                    [styles.active]: activeSubheroTab === "empresas",
                  })}
                >
                  <Typography
                    variant="subtitle3"
                    textAlign="left"
                    color="color-navy-blue-900"
                    weight="bold"
                  >
                    {t(`subhero.tabs.content.empresas.title`)}
                  </Typography>
                  <ul>
                    {Object.keys(subheroTabEmpresas.list).map((item, index) => (
                      <li key={index}>
                        <Typography
                          variant="body2"
                          textAlign="left"
                          color="color-dark-gray-900"
                          weight="normal"
                        >
                          {t(`subhero.tabs.content.empresas.list.${item}`)}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    onClick={() =>
                      router.push(t("subhero.tabs.content.empresas.ctaLink"))
                    }
                  >
                    {t("subhero.tabs.content.empresas.ctaText")}
                  </Button>
                  <Apartment className={styles.icon} />
                </Card>
              )}
            </div>
          </div>
        </InfoSection>
      </div>
      <Calificanos page="home.calificamos" />
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
