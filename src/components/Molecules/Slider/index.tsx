import React, { PropsWithChildren, useState } from "react";
import styles from "./main.module.scss";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import Image from "next/image";
import classNames from "classnames";

interface Props {
  page: string;
  colorShade: string;
  list: any[];
  activeStep: string;
  setActiveStep: (a: string) => void;
}
export const Slider: React.FC<PropsWithChildren<Props>> = ({
  page,
  colorShade,
  list,
  activeStep,
  setActiveStep,
  children,
}) => {
  const { t } = useRichTranslations(`Content.${page}`);

  const getDotColor = (section: string) => {
    const background = `var(--${t(`list.${activeStep}.backgroundColor`)})`;
    const dot = `var(--color-${colorShade ?? "light-gray"}-${activeStep === section ? "200" : "700"})`;
    if (background === dot) {
      return `var(--color-${colorShade}-50)`;
    }
    return dot;
  };

  const getBackgroundImage = () => {
    if (
      t(`list.${activeStep}.background`) !==
      `Content.${page}.list.${activeStep}.background`
    ) {
      return (
        <>
          <Image
            src={t(`list.${activeStep}.background`)}
            fill
            alt={t(`list.${activeStep}.backgroundAlt`)}
            className={styles.background}
          ></Image>
          <div className={styles.gradient}></div>
        </>
      );
    }
    return null;
  };

  return (
    <div
      className={styles.hero}
      style={{
        backgroundColor: `var(--${t(`list.${activeStep}.backgroundColor`)})`,
      }}
    >
      {getBackgroundImage()}
      <div className={styles.container}>
        <div className={classNames(styles.content, "slider-content")}>
          <div className={styles.carousel}>
            <div className={styles["slider_tabs"]}>
              {list.length > 1 && (
                <div id={`carousel.labels.${page}`}>
                  {list.map((section, index) => (
                    <input
                      key={section}
                      type="checkbox"
                      name="slider"
                      id={`${page}-${section}`}
                      checked={activeStep === section}
                      onChange={(e: any) => {
                        e.preventDefault();
                        setActiveStep(section);
                      }}
                    />
                  ))}
                  <div className={styles.labels}>
                    {list.map((section, index) => (
                      <label
                        key={`${page}-${section}`}
                        htmlFor={`${page}-${section}`}
                        className={
                          activeStep === section ? styles.active : undefined
                        }
                        style={{
                          background: getDotColor(section),
                        }}
                      ></label>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={styles["hero_content"]}
                style={{
                  width: `${list.length * 100}vw`,
                  left: `${list.findIndex((e) => e === activeStep) * -100}vw`,
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
