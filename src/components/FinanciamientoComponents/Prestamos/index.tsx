import React, { useCallback, useState } from "react";
import styles from "./main.module.scss";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Typography } from "@/components/Atoms/Typography";
import { Settings } from "./icons/Settings";
import { Receipt } from "./icons/Receipt";
import { Payments } from "./icons/Payments";
import classNames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import messages from "@/../messages/pages/financiamiento.json";

export const FinanciamientoPrestamos: React.FC = () => {
  const { t } = useRichTranslations("Content.financiamiento.prestamos");
  const [activeStep, setActiveStep] = useState<"one" | "two">("one");
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [paymentsAngle, setPaymentsAngle] = useState(115); //1
  const [receiptAngle, setReceiptAngle] = useState(155); //2
  const [backgroundRotation, setBackgroundRotation] = useState(0);

  const itemOneList = messages.prestamos.list.one.list;
  const itemTwoList = messages.prestamos.list.two.list;

  /**
   * top 115deg
   * bottom 155deg
   */

  // Clockwise
  const moveTopToBottomClockwise = useCallback((p: number) => p - 360 + 40, []);
  const moveBottomToTopClockwise = useCallback((p: number) => p - 40, []);

  // counter-Clockwise
  const moveTopToBottomCounterClockwise = useCallback(
    (p: number) => p + 40,
    []
  );
  const moveBottomToTopCounterClockwise = useCallback(
    (p: number) => p + 360 - 40,
    []
  );

  const moveUp = useCallback(() => {
    setDirection("up");
    setBackgroundRotation((p) => p + 90);
    switch (activeStep) {
      case "one":
        setActiveStep("two");
        setPaymentsAngle((p) => moveTopToBottomClockwise(p));
        setReceiptAngle((p) => moveBottomToTopClockwise(p));
        break;
      case "two":
        setActiveStep("one");
        setReceiptAngle((p) => moveTopToBottomClockwise(p));
        setPaymentsAngle((p) => moveBottomToTopClockwise(p));
        break;
    }
  }, [activeStep, moveBottomToTopClockwise, moveTopToBottomClockwise]);

  const moveDown = useCallback(() => {
    setBackgroundRotation((p) => p - 90);
    setDirection("down");

    switch (activeStep) {
      case "one":
        setActiveStep("two");
        setPaymentsAngle((p) => moveTopToBottomCounterClockwise(p));
        setReceiptAngle((p) => moveBottomToTopCounterClockwise(p));
        break;
      case "two":
        setActiveStep("one");
        setReceiptAngle((p) => moveTopToBottomCounterClockwise(p));
        setPaymentsAngle((p) => moveBottomToTopCounterClockwise(p));
        break;
    }
  }, [
    activeStep,
    moveBottomToTopCounterClockwise,
    moveTopToBottomCounterClockwise,
  ]);

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
                  color="color-green-900"
                  weight="700"
                >
                  {t("list.one.title")}
                </Typography>
                <ul>
                  {Object.keys(itemOneList).map((key) => (
                    <li key={key}>
                      <Typography
                        variant="subtitle2"
                        textAlign="left"
                        color="color-green-900"
                        weight="700"
                      >
                        {t(`list.one.list.${key}`)}
                      </Typography>
                    </li>
                  ))}
                </ul>
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
                color="color-green-900"
                weight="700"
              >
                {t("list.two.title")}
              </Typography>
              <ul>
                {Object.keys(itemTwoList).map((key) => (
                  <li key={key}>
                    <Typography
                      variant="subtitle2"
                      textAlign="left"
                      color="color-green-900"
                      weight="700"
                    >
                      {t(`list.two.list.${key}`)}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.switcher}>
            <button onClick={moveUp}>
              <FaChevronUp color="var(--color-navy-blue-700)" />
            </button>
            <button onClick={moveDown}>
              <FaChevronDown color="var(--color-navy-blue-700)" />
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
                styles.itemPayments,
                styles[activeStep],
                {
                  [styles.active]: activeStep == "one",
                }
              )}
              style={{ ["--rotate" as any]: `${paymentsAngle}deg` }}
            >
              <Payments
                onClick={() => {
                  moveUp();
                }}
              />
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
              <Receipt
                onClick={() => {
                  moveUp();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
