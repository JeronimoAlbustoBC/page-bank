"use client";
import messages from "@/../messages/pages/solucionesParaPymes.json";
import styles from "./page.module.scss";
import { HeroSection } from "@/components/Organisms/HeroSection";
import { Button } from "@/components/Atoms/Button";
import classNames from "classnames";
import { useState } from "react";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { InfoSection } from "@/components/Organisms/InfoSection";
import { Typography } from "@/components/Atoms/Typography";
import { useRouter } from "next/navigation";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";
import { getIcon } from "@/components/Atoms/Icons";
import { Card } from "@/components/Atoms/Card";

export function SolucionesParaPymesPage() {
  const { t, tRich, exists } = useRichTranslations(
    "Content.solucionesParaPymes"
  );
  const heroList = messages.hero.list;
  const tabs = messages.tabs;
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs.content)[0]);
  const router = useRouter();
  const propuestasCards = messages.propuestas.list;

  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="solucionesParaPymes.hero"
        titleMaxWidth="1100px"
        list={heroList}
        colorShade="light-gray"
        className={styles.hero}
      />
      <div className={styles.subhero}>
        <InfoSection variant="one" page={`solucionesParaPymes.subhero`}>
          <div className={styles.section}>
            <Typography
              variant={"h3"}
              textAlign="left"
              color={"color-navy-blue-900"}
            >
              {tRich(`subhero.text`)}
            </Typography>
          </div>
        </InfoSection>
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
          <InfoSection
            variant="one"
            page={`solucionesParaPymes.tabs.content.${selectedTab}`}
          >
            <div className={styles.section}>
              <Typography
                variant={"h3"}
                textAlign="left"
                color={"color-navy-blue-900"}
                weight="bold"
              >
                {tRich(`tabs.content.${selectedTab}.title`)}
              </Typography>
              {exists(`tabs.content.${selectedTab}.text`) && (
                <Typography
                  variant={"body1"}
                  textAlign="left"
                  color={"color-navy-blue-900"}
                >
                  {tRich(`tabs.content.${selectedTab}.text`)}
                </Typography>
              )}
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
              {exists(`tabs.content.${selectedTab}.ctaText`) && (
                <Button
                  variant={"primary"}
                  onClick={() => {
                    setDropdownValue(
                      t(`tabs.content.${selectedTab}.formDefault`)
                    );
                    router.push(t(`tabs.content.${selectedTab}.ctaLink`));
                  }}
                  className={styles.cta}
                >
                  {tRich(`tabs.content.${selectedTab}.ctaText`)}
                </Button>
              )}
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
