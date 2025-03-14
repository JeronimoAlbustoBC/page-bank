import React from "react";
import styles from "./main.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import Marquee from "react-marquee-slider";

interface Props {
  items: { name: string; link: string }[];
  color?: string;
  backgroundColor?: string;
}

export const MarqueeSection: React.FC<Props> = ({
  items,
  color,
  backgroundColor,
}) => {
  const repeat = (arr: any[], n: number) => Array(n).fill(arr).flat();

  return (
    <div
      className={styles.marqueeContainer}
      style={{
        backgroundColor: `var(--${backgroundColor ?? "color-navy-blue-800"})`,
      }}
    >
      <Marquee
        velocity={10}
        resetAfterTries={150}
        scatterRandomly={false}
        direction="rtl"
        onInit={() => {}}
        onFinish={() => {}}
      >
        {repeat(items, 8).map((item, index) => (
          <div key={index} className={styles.itemContent}>
            <Typography
              variant={item.link !== "" ? "a" : "body1"}
              href={item.link}
              color={color ?? "color-green-400"}
              textAlign="center"
              className={styles.link}
              weight="bold"
            >
              {item.name}
            </Typography>
            <Typography
              variant="subtitle3"
              color={color ?? "color-green-400"}
              textAlign="center"
              className={styles.dash}
              weight="bold"
            >
              -
            </Typography>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
