import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@/components/Molecules/Breadcrumb";
import { useRouter } from "next/navigation";
import styles from "./main.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import { Button } from "@/components/Atoms/Button";
import { Slider } from "@/components/Molecules/Slider";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import classNames from "classnames";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";

interface heroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  background: string;
  backgroundAlt: string;
}

interface Props {
  list: { [key: string]: heroSection };
  titleMaxWidth?: string;
  colorShade: string;
  page: string;
  className?: string;
}

export const HeroSection: React.FC<Props> = ({
  page,
  titleMaxWidth,
  list,
  colorShade,
  className,
}) => {
  const { t, tRich, exists } = useRichTranslations(`Content.${page}`);
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(Object.keys(list)[0]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    let interval = setInterval(() => {
      setActiveStep((prev) => {
        const index = Object.keys(list).findIndex((e) => e === prev);
        if (index > -1) {
          if (index + 1 === Object.keys(list).length) {
            return Object.keys(list)[0];
          } else {
            return Object.keys(list)[index + 1];
          }
        }
        return Object.keys(list)[0];
      });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeStep]);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
    if (isRightSwipe) {
      setActiveStep((prev) => {
        const index = Object.keys(list).findIndex((e) => e === prev);
        if (index > -1) {
          if (index === 0) {
            return Object.keys(list)[Object.keys(list).length - 1];
          } else {
            return Object.keys(list)[index - 1];
          }
        }
        return Object.keys(list)[0];
      });
    }
    if (isLeftSwipe) {
      setActiveStep((prev) => {
        const index = Object.keys(list).findIndex((e) => e === prev);
        if (index > -1) {
          if (index + 1 === Object.keys(list).length) {
            return Object.keys(list)[0];
          } else {
            return Object.keys(list)[index + 1];
          }
        }
        return Object.keys(list)[0];
      });
    }
  };

  return (
    <div
      className={classNames(styles.heroContainer, className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Slider
        page={page}
        list={Object.keys(list)}
        colorShade={colorShade}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      >
        {Object.keys(list).map((section, index) => (
          <React.Fragment key={index}>
            <div className={styles.carouselItem}>
              <div className={styles.content}>
                <div className={styles.breadcrumb}>
                  <Breadcrumb
                    textColor={
                      exists(`list.${activeStep}.breadcrumbColor`)
                        ? t(`list.${activeStep}.breadcrumbColor`)
                        : "color-white"
                    }
                  />
                </div>
                <div
                  className={styles.textContainer}
                  style={{ maxWidth: titleMaxWidth || "100%" }}
                >
                  <Typography
                    variant={
                      exists(`list.${section}.titleVariant`)
                        ? (t(`list.${section}.titleVariant`) as any)
                        : "h1"
                    }
                    textAlign="left"
                    color="color-white"
                    weight="800"
                  >
                    {tRich(`list.${section}.title`)}
                  </Typography>
                  {exists(`list.${section}.subtitle`) && (
                    <Typography
                      variant="subtitle3"
                      textAlign="left"
                      color="color-white"
                      weight="bold"
                    >
                      {t(`list.${section}.subtitle`)}
                    </Typography>
                  )}
                  {exists(`list.${section}.ctaText`) && (
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
              </div>
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};
