"use client";
import styles from "./page.module.scss";
import { HeroSection } from "@/components/Organisms/HeroSection";
import { Factoring } from "@/components/LeasingComponents/Factoring";
import messages from "@/../messages/pages/leasing.json";
import { Card } from "@/components/Atoms/Card";
import { getIcon } from "@/components/Atoms/Icons";
import { Typography } from "@/components/Atoms/Typography";
import { Calificanos } from "@/components/Organisms/Calificanos";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import { useRichTranslations } from "@/hooks/useRichTranslation";

export function LeasingPage() {
  const { t, tRich } = useRichTranslations("Content.leasing");
  const cardsList = messages.cards;
  const propuestasCards = messages.propuestas.list;
  const router = useRouter();

  return (
    <main className={styles.main}>
      <HeroSection variant="one" page="leasing" titleMaxWidth="551px" />
      <Factoring />
      <div className={styles.cards}>
        <div className={styles.content}>
          {Object.keys(cardsList).map((key) => (
            <Card padding="md" key={key} className={styles.card}>
              {getIcon(t(`cards.${key}.icon`), { className: styles.icon })}
              <Typography
                variant="h5"
                textAlign="center"
                color="color-navy-blue-800"
                weight="600"
              >
                {t(`cards.${key}.title`)}
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                color="color-navy-blue-900"
              >
                {t(`cards.${key}.text`)}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
      <Calificanos page="leasing.calificamos" className={styles.banner} />
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
