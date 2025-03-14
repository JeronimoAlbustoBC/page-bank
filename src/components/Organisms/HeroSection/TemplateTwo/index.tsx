import React from "react";
import Image from "next/image";
import styles from "./main.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import { Breadcrumb } from "@/components/Molecules/Breadcrumb";
import { useTranslations } from "next-intl";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import classnames from "classnames";
import classNames from "classnames";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";
import { useRichTranslations } from "@/hooks/useRichTranslation";

interface heroSection {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  background: string;
  backgroundAlt: string;
}
interface Props {
  page: string;
  titleMaxWidth: string;
  list: heroSection;
  colorShade: string;
  className?: string;
}

export const HeroSection: React.FC<Props> = ({
  page,
  titleMaxWidth,
  list,
  colorShade,
  className = "",
}) => {
  const { t, exists } = useRichTranslations(`Content.${page}`);
  const router = useRouter();

  return (
    <div
      className={classNames(styles.hero, className)}
      style={{ backgroundColor: `var(--color-${colorShade}-100)` }}
    >
      <div className={styles.content}>
        <div className={styles.carousel}>
          {Object.keys(list).map((section, index) => (
            <React.Fragment key={index}>
              <div className={styles.breadcrumb}>
                <Breadcrumb
                  textColor={
                    t(`list.${section}.breadcrumbColor`) !==
                    `Content.${page}.list.${section}.breadcrumbColor`
                      ? t(`list.${section}.breadcrumbColor`)
                      : "color-white"
                  }
                />
              </div>
              <div className={styles.carouselItem}>
                <div
                  className={styles.textContainer}
                  style={{ maxWidth: titleMaxWidth || "100%" }}
                >
                  <Typography
                    variant="h1"
                    textAlign="left"
                    color="color-navy-blue-800"
                    weight="800"
                  >
                    {t(`list.${section}.title`)}
                  </Typography>
                  {t(`list.${section}.subtitle`) && (
                    <Typography
                      variant="subtitle3"
                      textAlign="left"
                      color="color-navy-blue-800"
                      weight="bold"
                    >
                      {t(`list.${section}.subtitle`)}
                    </Typography>
                  )}
                  {t(`list.${section}.ctaText`) && (
                    <Button
                      variant="primary"
                      onClick={() => {
                        console.log(exists(`list.${section}.formDefault`));

                        exists(`list.${section}.formDefault`) &&
                          setDropdownValue(t(`list.${section}.formDefault`));
                        router.push(t(`list.${section}.ctaLink`));
                      }}
                    >
                      {t(`list.${section}.ctaText`)}
                    </Button>
                  )}
                </div>
                <div className={styles.image}>
                  {t(`list.${section}.imageDecoration`) !==
                    `Content.${page}.list.${section}.imageDecoration` && (
                    <div
                      className={classnames(styles.imageDecoration, [
                        styles[t(`list.${section}.imageDecoration`)],
                      ])}
                      style={{
                        borderColor:
                          t(`list.${section}.imageDecorationColor`) ==
                          `Content.${page}.list.${section}.imageDecorationColor`
                            ? "var(--color-white)"
                            : `var(--${t(`list.${section}.imageDecorationColor`)})`,
                      }}
                    >
                      {}
                    </div>
                  )}
                  <Image
                    src={t(`list.${section}.background`)}
                    fill
                    alt={t(`list.${section}.backgroundAlt`)}
                    className={styles.background}
                  ></Image>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
