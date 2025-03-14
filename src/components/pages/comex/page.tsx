"use client";
import styles from "./page.module.scss";
import { HeroSection } from "@/components/Organisms/HeroSection";
import messages from "@/../messages/pages/comex.json";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Typography } from "@/components/Atoms/Typography";
import classNames from "classnames";
import Image from "next/image";
import { Card } from "@/components/Atoms/Card";
import { ToolCard } from "./ToolCard";
import { getIcon } from "@/components/Atoms/Icons";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";

export function ComexPage() {
  const subheroList = messages.subhero.list;
  const { t, tRich } = useRichTranslations("Content.comex");
  const heroList = messages.hero.list;
  const subheroTitle = messages.subhero.titles;
  const list = messages.greenBox.list;
  const propuestasCards = messages.propuestas.list;
  const router = useRouter();

  return (
    <main className={styles.main}>
      <HeroSection
        page="comex.hero"
        titleMaxWidth="667px"
        variant="four"
        list={heroList}
        colorShade="light-gray"
      />
      <div className={styles.greenBox}>
        <div className={classNames(styles.content, styles.subherogreen)}>
          <Typography
            className={styles.title}
            variant="h2"
            textAlign="center"
            weight="bold"
            color="color-navy-blue-800"
          >
            {tRich(`subherogreen.title`)}
          </Typography>
          <Typography
            className={styles.title}
            variant="h4"
            textAlign="center"
            color="color-navy-blue-900"
          >
            {tRich(`subherogreen.text`)}
          </Typography>
        </div>
      </div>
      <div className={styles.subhero}>
        <div className={styles.titles}>
          {Object.keys(subheroTitle).map((key) => (
            <div key={key} className={classNames(styles.item, styles.subhero)}>
              <div className={styles.icon}>
                {getIcon(t(`subhero.titles.${key}.icon`))}
              </div>
              <div className={styles.texts}>
                <Typography
                  className={styles.title}
                  variant="h2"
                  textAlign="left"
                  weight="bold"
                  color="color-navy-blue-800"
                >
                  {tRich(`subhero.titles.${key}.title`)}
                </Typography>
                <Typography
                  className={styles.text}
                  variant="body1"
                  textAlign="left"
                  color="color-navy-blue-800"
                >
                  {tRich(`subhero.titles.${key}.text`)}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.list}>
          {Object.keys(subheroList).map((item, index) => (
            <Card padding="md" key={index} className={styles.item}>
              <div className={styles.image}>
                <Image
                  src={t(`subhero.list.${item}.image`)}
                  alt={t(`subhero.list.${item}.imageAlt`)}
                  fill
                />
              </div>

              <Typography
                className={styles.text}
                variant="body1"
                textAlign="center"
              >
                {t(`subhero.list.${item}.text`)}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
      <div className={styles.greenBox}>
        <div className={styles.content}>
          <Typography
            className={styles.text}
            variant="h1"
            textAlign="left"
            weight="bold"
            color="color-navy-blue-800"
          >
            {tRich(`greenBox.title`)}
          </Typography>
          <div className={styles.cards}>
            {Object.keys(list).map((item) => (
              <ToolCard key={item} item={item} />
            ))}
          </div>
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
