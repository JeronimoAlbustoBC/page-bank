"use client";
import messages from "@/../messages/pages/BDCConecta.json";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./main.module.scss";
import { Button } from "@/components/Atoms/Button";
import { Typography } from "@/components/Atoms/Typography";
import { useState } from "react";
import classNames from "classnames";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { useRouter } from "next/navigation";
import { Card } from "@/components/Atoms/Card";
import { Widgets } from "@/components/Atoms/Icons/svgs/Widgets";
import { Store } from "@/components/Atoms/Icons/svgs/Store";
import { Apartment } from "@/components/Atoms/Icons/svgs/Apartment";
import { getIcon } from "@/components/Atoms/Icons";

export function BDCConectaPage() {
  const { tRich, t } = useRichTranslations("Content.BDCConecta");
  const router = useRouter();
  const heroList = messages.hero.list;
  const tabs = messages.tabs;
  const greenBoxCards = messages.greenBox.cards;
  const propuestasCards = messages.cards.list;
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs.titles)[0]);

  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        list={heroList}
        page="BDCConecta.hero"
        colorShade="light-gray"
        titleMaxWidth="850px"
      />
      <div className={styles.tabs}>
        <div className={styles.tabsContainer}>
          {Object.keys(tabs.titles).map((key) => (
            <Button
              variant="tertiary"
              key={key}
              onClick={() => setSelectedTab(key)}
              className={classNames(styles.tabLabel, {
                [styles.active]: selectedTab === key,
              })}
            >
              {t(`tabs.titles.${key}`)}
            </Button>
          ))}
        </div>
        <div className={styles.tabsContent}>
          <div className={styles.section}>
            <Typography
              variant={"h3"}
              textAlign="left"
              className={styles.sectionTitle}
              color={"color-navy-blue-900"}
              weight="bold"
            >
              {tRich(`tabs.content.${selectedTab}.title`)}
            </Typography>
            <Typography
              variant={"h5"}
              textAlign="left"
              className={styles.sectionTitle}
              color={"color-navy-blue-900"}
            >
              {tRich(`tabs.content.${selectedTab}.subtitle`)}
            </Typography>
            <ul className={styles.list}>
              {/* @ts-ignore */}
              {Object.keys(tabs.content[selectedTab].list).map((sub) => (
                <li key={sub}>
                  <Typography
                    variant={"body1"}
                    textAlign="left"
                    className={styles.sectionTitle}
                    color={"color-navy-blue-900"}
                  >
                    {t(`tabs.content.${selectedTab}.list.${sub}`)}
                  </Typography>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              onClick={() =>
                router.push(t(`tabs.content.${selectedTab}.ctaLink`))
              }
            >
              {t(`tabs.content.${selectedTab}.ctaText`)}
            </Button>
          </div>
          <div className={styles.icon}>
            {getIcon(t(`tabs.content.${selectedTab}.icon`))}
          </div>
        </div>
      </div>
      <div className={styles.greenBox}>
        <div className={styles.content}>
          <Typography
            variant={"h3"}
            textAlign="left"
            className={styles.title}
            color={"color-navy-blue-900"}
            weight="bold"
          >
            {t("greenBox.title")}
          </Typography>
          <div className={styles.cards}>
            {Object.keys(greenBoxCards).map((card, index) => {
              return (
                <Card key={index} padding="md" className={styles.card}>
                  <div className={styles.icon}>
                    {getIcon(t(`greenBox.cards.${card}.icon`))}
                  </div>
                  <Typography
                    variant="subtitle3"
                    color={"navy-blue-800"}
                    textAlign="left"
                  >
                    {t(`greenBox.cards.${card}.text`)}
                  </Typography>
                </Card>
              );
            })}
          </div>
          <Button
            variant="secondary"
            className={styles.cta}
            onClick={() => router.push(t("greenBox.ctaLink"))}
          >
            {t(`greenBox.ctaText`)}
          </Button>
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
            {t("cards.title")}
          </Typography>
          <div className={styles.cards}>
            {Object.keys(propuestasCards).map((card, index) => {
              return (
                <Card key={index} padding="md" className={styles.card}>
                  <div className={styles.icon}>
                    {getIcon(t(`cards.list.${card}.icon`))}
                  </div>
                  <Typography
                    variant="subtitle3"
                    color={"navy-blue-800"}
                    textAlign="left"
                  >
                    {tRich(`cards.list.${card}.title`)}
                  </Typography>
                  <ul className={styles.list}>
                    {/* @ts-ignore */}
                    {Object.keys(propuestasCards[card].list).map((sub) => (
                      <li key={sub}>
                        <Typography
                          variant={"body1"}
                          textAlign="left"
                          color={"color-navy-blue-900"}
                        >
                          {t(`cards.list.${card}.list.${sub}`)}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="secondary"
                    className={styles.cta}
                    onClick={() => router.push(t(`cards.list.${card}.ctaLink`))}
                  >
                    {t(`cards.list.${card}.ctaText`)}
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
