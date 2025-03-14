"use client";
import styles from "./page.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import messages from "@/../messages/pages/franquicias.json";
import { HeroSection } from "@/components/Organisms/HeroSection";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import { Store } from "@/components/Atoms/Icons/svgs/Store";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { TabItem } from "@/components/Atoms/TabItem";
import { useState } from "react";
import classNames from "classnames";
import { Calificanos } from "@/components/Organisms/Calificanos";
import { Card } from "@/components/Atoms/Card";
import { getIcon } from "@/components/Atoms/Icons";

export function FranquiciasPage() {
  const { t, tRich } = useRichTranslations("Content.franquicias");
  const router = useRouter();
  const tabs = messages.tabs;
  const [activeTab, setActiveTab] = useState<string>("one");
  // @ts-ignore
  const activeTabList = tabs.content[activeTab].list;
  const propuestasCards = messages.propuestas.list;
  const heroList = messages.hero.list;

  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="franquicias.hero"
        titleMaxWidth="820px"
        list={heroList}
        colorShade="light-gray"
      />
      <div className={styles.subhero}>
        <div className={styles.content}>
          <Typography
            className={styles.title}
            variant="h2"
            textAlign="center"
            weight="bold"
            color="color-franquicias-50"
          >
            {t("subhero.title")}
          </Typography>
          <Typography
            variant="h4"
            color="color-franquicias-50"
            textAlign="center"
          >
            {t("subhero.text")}
          </Typography>
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={styles.content}>
          <div className={styles.tabTitles}>
            {Object.keys(tabs.titles).map((key) => (
              <TabItem
                key={key}
                id={key}
                active={activeTab === key}
                label={t(`tabs.titles.${key}`)}
                onClick={() => setActiveTab(key)}
                className={classNames(styles.tabItem, {
                  [styles.active]: activeTab === key,
                })}
              />
            ))}
          </div>
          <Typography
            variant="h1"
            color="color-black"
            textAlign="center"
            weight="bold"
          >
            {t(`tabs.content.${activeTab}.title`)}
          </Typography>
          <Typography
            variant="body1"
            color="color-black"
            textAlign="center"
            weight="normal"
            className={styles.subtitle}
          >
            {tRich(`tabs.content.${activeTab}.subtitle`)}
          </Typography>
          <div className={styles.tabContent}>
            <div className={styles.cards}>
              {Object.keys(activeTabList).map((key) => (
                <Card key={key} className={styles.card} padding="md">
                  {getIcon(t(`tabs.content.${activeTab}.list.${key}.icon`), {
                    className: styles.icon,
                  })}
                  <Typography
                    variant="subtitle3"
                    color="color-navy-blue-800"
                    textAlign="center"
                  >
                    {tRich(`tabs.content.${activeTab}.list.${key}.text`)}
                  </Typography>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Calificanos page="franquicias.calificamos" />
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

                  <ul className={styles.list}>
                    {/* @ts-ignore */}
                    {Object.keys(propuestasCards[card].list).map((sub) => (
                      <li key={sub}>
                        <Typography
                          variant={"body1"}
                          textAlign="left"
                          color={"color-navy-blue-900"}
                        >
                          {t(`propuestas.list.${card}.list.${sub}`)}
                        </Typography>
                      </li>
                    ))}
                  </ul>
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
