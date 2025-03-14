import React, { useCallback, useState } from "react";
import styles from "./main.module.scss";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Typography } from "@/components/Atoms/Typography";
import { Settings } from "./icons/Settings";
import classNames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Savings } from "@/components/Atoms/Icons/svgs/Savings";
import { Task } from "@/components/Atoms/Icons/svgs/Task";
import { Payments } from "@/components/Atoms/Icons/svgs/Payments";

export const Factoring: React.FC = () => {
  const { t } = useRichTranslations("Content.leasing.factoring");
  const [activeStep, setActiveStep] = useState<"one" | "two" | "three">("one");
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [receiptAngle, setReceiptAngle] = useState(145); //2
  const [paymentsAngle, setPaymentsAngle] = useState(30); //3
  const [cachedAngle, setCachedAngle] = useState(94); //1
  const [backgroundRotation, setBackgroundRotation] = useState(0); //1

  /**
   * top 30deg
   * mid 94deg
   * bottom 145deg
   */

  // Clockwise
  const moveTopToBottom = useCallback((p: number) => p - 360 + 115, []);
  const moveBottomToMid = useCallback((p: number) => p - 51, []);
  const moveMidToTop = useCallback((p: number) => p - 64, []);
  // counter-Clockwise
  const moveTopToMid = useCallback((p: number) => p + 64, []);
  const moveMidToBottom = useCallback((p: number) => p + 51, []);
  const moveBottomToTop = useCallback((p: number) => p + 360 - 145 + 30, []);

  const moveUp = useCallback(() => {
    setDirection("up");
    setBackgroundRotation((p) => p + 90);
    switch (activeStep) {
      case "one":
        setActiveStep("two");
        setCachedAngle((p) => moveMidToTop(p));
        setPaymentsAngle((p) => moveTopToBottom(p));
        setReceiptAngle((p) => moveBottomToMid(p));
        break;
      case "two":
        setActiveStep("three");
        setReceiptAngle((p) => moveMidToTop(p));
        setCachedAngle((p) => moveTopToBottom(p));
        setPaymentsAngle((p) => moveBottomToMid(p));
        break;
      case "three":
        setActiveStep("one");
        setPaymentsAngle((p) => moveMidToTop(p));
        setReceiptAngle((p) => moveTopToBottom(p));
        setCachedAngle((p) => moveBottomToMid(p));
        break;
    }
  }, [activeStep, moveBottomToMid, moveMidToTop, moveTopToBottom]);

  const moveDown = useCallback(() => {
    setBackgroundRotation((p) => p - 90);
    setDirection("down");

    switch (activeStep) {
      case "one":
        setActiveStep("three");
        setCachedAngle((p) => moveMidToBottom(p));
        setReceiptAngle((p) => moveBottomToTop(p));
        setPaymentsAngle((p) => moveTopToMid(p));
        break;
      case "two":
        setActiveStep("one");
        setReceiptAngle((p) => moveMidToBottom(p));
        setPaymentsAngle((p) => moveBottomToTop(p));
        setCachedAngle((p) => moveTopToMid(p));
        break;
      case "three":
        setActiveStep("two");
        setPaymentsAngle((p) => moveMidToBottom(p));
        setCachedAngle((p) => moveBottomToTop(p));
        setReceiptAngle((p) => moveTopToMid(p));
        break;
    }
  }, [activeStep, moveBottomToTop, moveMidToBottom, moveTopToMid]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.heading}>
            <Typography
              variant="h1"
              textAlign="left"
              color="color-navy-blue-800"
              weight="bold"
            >
              {t("title")}
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="left"
              color="color-navy-blue-800"
              weight="700"
            >
              {t("text")}
            </Typography>
          </div>
          <div className={styles.dynamicAisle}>
            <div
              className={classNames(
                styles[activeStep],
                {
                  [styles.active]: activeStep == "one",
                },
                styles[direction]
              )}
            >
              <div className={classNames(styles.filled)}>
                <Typography
                  variant="h2"
                  textAlign="left"
                  color="color-navy-blue-900"
                  weight="700"
                >
                  {t("list.one")}
                </Typography>
              </div>
            </div>
            <div
              className={classNames(
                styles.filled,
                styles[activeStep],
                {
                  [styles.active]: activeStep == "two",
                },
                styles[direction]
              )}
            >
              <Typography
                variant="h2"
                textAlign="left"
                color="color-navy-blue-900"
                weight="700"
              >
                {t("list.two")}
              </Typography>
            </div>
            <div
              className={classNames(
                styles.filled,
                styles[activeStep],
                {
                  [styles.active]: activeStep == "three",
                },
                styles[direction]
              )}
            >
              <Typography
                variant="h2"
                textAlign="left"
                color="color-navy-blue-900"
                weight="700"
              >
                {t("list.three")}
              </Typography>
            </div>
          </div>
          <div className={styles.switcher}>
            <button onClick={moveUp}>
              <FaChevronUp color="var(--color-white)" />
            </button>
            <button onClick={moveDown}>
              <FaChevronDown color="var(--color-white)" />
            </button>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.border}>
            <div
              className={styles.background}
              style={{ transform: `rotate(${backgroundRotation}deg)` }}
            >
              <Settings width="368" height="378" className={styles.settings} />
            </div>
            <div
              className={classNames(
                styles.item,
                styles.itemCached,
                styles[activeStep],
                {
                  [styles.active]: activeStep == "one",
                }
              )}
              style={{ ["--rotate" as any]: `${cachedAngle}deg` }}
            >
              <div
                onClick={() => {
                  activeStep === "two" ? moveDown() : moveUp();
                }}
              >
                <Payments />
              </div>
            </div>
            <div
              className={classNames(
                styles.item,
                styles.itemReceipt,
                styles[activeStep],
                {
                  [styles.active]: activeStep == "two",
                }
              )}
              style={{ ["--rotate" as any]: `${receiptAngle}deg` }}
            >
              <div
                onClick={() => {
                  activeStep === "three" ? moveDown() : moveUp();
                }}
              >
                <Task />
              </div>
            </div>
            <div
              className={classNames(
                styles.item,
                styles.itemPayments,
                styles[activeStep],
                {
                  [styles.active]: activeStep == "three",
                }
              )}
              style={{ ["--rotate" as any]: `${paymentsAngle}deg` }}
            >
              <div
                onClick={() => {
                  activeStep === "one" ? moveDown() : moveUp();
                }}
              >
                <Savings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
