"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import messages from "@/../messages/pages/negociosYProfesionales.json";
import { Button } from "@/components/Atoms/Button";
import { Typography } from "@/components/Atoms/Typography";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Payments } from "@/components/Atoms/Icons/svgs/Payments";
import { MarqueeSection } from "@/components/Organisms/MarqueeSection";
import { Store } from "@/components/Atoms/Icons/svgs/Store";
import { AssuredWorkload } from "@/components/Atoms/Icons/svgs/AssuredWorkload";
import { Card } from "@/components/Atoms/Card";
import { ToolCard } from "./ToolCard";
import { getIcon } from "@/components/Atoms/Icons";

export default function NegociosYProfesionalesPage() {
  const list = messages.items.list;
  const heroList = messages.hero.list;
  const marqueeList = messages.marquee.list;
  const propuestasCards = messages.propuestas.list;
  const bannerList = messages.banner.list;
  const router = useRouter();
  const { t, tRich } = useRichTranslations("Content.negociosYProfesionales");
  return (
    <main className={styles.main}>
      <HeroSection
        variant="four"
        page="negociosYProfesionales.hero"
        titleMaxWidth="800px"
        colorShade="agro"
        list={heroList}
      />
      <div className={styles.banner}>
        <div className={styles.content}>
          <div>
            <Typography
              variant="h2"
              textAlign="left"
              className={styles.text}
              color="color-white"
              weight="bold"
            >
              {tRich("banner.title")}
            </Typography>
            <Typography
              variant="h5"
              textAlign="left"
              className={styles.text}
              color="color-white"
            >
              {t("banner.text")}
            </Typography>


<ul className={styles.text_bloque}>
  {Object.keys(bannerList).map((key) => (
  <li key={key}>
    <Typography variant="subtitle3" textAlign="left" color="color-white">
      {tRich(`banner.list.${key}.text`)}
    </Typography>

     <ul className={styles.text_bloque_sub}>
      
      {// @ts-ignore 
       Object.keys(bannerList[key].sublist).map((skey) => (
      <li key={skey}>
        <Typography variant="subtitle3" textAlign="left" color="color-white">
          {t(`banner.list.${key}.sublist.${skey}`)}
        </Typography>
      </li>
      ))}
    </ul>
  </li>
  ))}
</ul>


          </div>
          <div className={styles.image}>
            <Image src={t("banner.image")} alt={t("banner.imageAlt")} fill />
          </div>
        </div>
      </div>
      <MarqueeSection
        items={Object.values(marqueeList)}
        color="color-franquicias-700"
        backgroundColor="color-franquicias-100"
      />
      <div className={styles.tools}>
        <div className={styles.content}>
          <Typography
            variant="h1"
            color="color-white"
            textAlign="center"
            className={styles.itemsTitle}
            weight="bold"
          >
            {t(`items.title`)}
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
            textAlign="center"
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
                      height: 66,
                      className: styles.icon,
                    })}
                  </div>
                  <Typography
                    variant="subtitle3"
                    color={"navy-blue-900"}
                    textAlign="left"
                    weight="bold"
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
                      onClick={() => router.push(t("greenBox.ctaText"))}
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
