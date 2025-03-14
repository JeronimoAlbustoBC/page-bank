"use client";
import React from "react";
import { Typography } from "@/components/Atoms/Typography";
import classes from "./main.module.scss";
import Link from "next/link";
import messages from "@/../messages/components/Footer.json";
import Image from "next/image";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { usePathname } from "next/navigation";

export const Footer: React.FC = () => {
  const { t, tRich } = useRichTranslations("Footer");
  const path = usePathname();

  const firstList1 = messages.section1.list1;
  const firstList2 = messages.section1.list2;
  const secondList = messages.section2.list;
  const thirdList1 = messages.section3.list1;
  const thirdList2 = messages.section3.list2;

  const pagesFirstList1: { label: string; link: string }[] = Object.keys(
    firstList1
  ).map((p) => ({
    label: t(`section1.list1.${p}.label`),
    link: t(`section1.list1.${p}.link`),
  }));
  const pagesFirstList2: { label: string; link: string }[] = Object.keys(
    firstList2
  ).map((p) => ({
    label: t(`section1.list2.${p}.label`),
    link: t(`section1.list2.${p}.link`),
  }));
  const pagesSecondList: { label: string; link: string }[] = Object.keys(
    secondList
  ).map((p) => ({
    label: t(`section2.list.${p}.label`),
    link: t(`section2.list.${p}.link`),
  }));
  const pagesThirdList1: { label: string; link: string }[] = Object.keys(
    thirdList1
  ).map((p) => ({
    label: t(`section3.list1.${p}.label`),
    link: t(`section3.list1.${p}.link`),
  }));
  const pagesThirdList2: { label: string; link: string }[] = Object.keys(
    thirdList2
  ).map((p) => ({
    label: t(`section3.list2.${p}.label`),
    link: t(`section3.list2.${p}.link`),
  }));

  const isGreen = () => {
    return [
      "/inversiones",
      "/financiamiento",
      "/salud",
      "/comex",
      "/informacion-al-usuario",
    ].includes(path);
  };

  return (
    <footer
      className={classes.container}
      style={{
        backgroundColor: `var(--color-${isGreen() ? "green" : "navy-blue"}-600)`,
      }}
    >
      <div className={classes.content}>
        <div className={classes.section}>
          <Link href={t("section1.titleLink")}>
            <Typography variant="body2" textAlign="left" color="color-white">
              {t("section1.title")}
            </Typography>
          </Link>
          <Typography variant="body2" textAlign="left" color="color-white">
            {t("section1.subtitle1")}
          </Typography>
          <div className={classes.list}>
            {pagesFirstList1.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className={classes.listItem}
                style={{
                  color: `var(--color-${isGreen() ? "green" : "franquicias"}-100)`,
                }}
              >
                {page.label}
              </Link>
            ))}
          </div>
          <Typography variant="body2" textAlign="left" color="color-white">
            {t("section1.subtitle2")}
          </Typography>
          <div className={classes.list}>
            {pagesFirstList2.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className={classes.listItem}
                style={{
                  color: `var(--color-${isGreen() ? "green" : "franquicias"}-100)`,
                }}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant="body2" textAlign="left" color="color-white">
            {t("section2.title")}
          </Typography>
          <div className={classes.list}>
            {pagesSecondList.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className={classes.listItem}
                style={{
                  color: `var(--color-${isGreen() ? "green" : "franquicias"}-100)`,
                }}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant="body2" textAlign="left" color="color-white">
            {t("section3.title1")}
          </Typography>
          <div className={classes.list}>
            {pagesThirdList1.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className={classes.listItem}
                style={{
                  color: `var(--color-${isGreen() ? "green" : "franquicias"}-100)`,
                }}
              >
                {page.label}
              </Link>
            ))}
          </div>
          <Typography variant="body2" textAlign="left" color="color-white">
            {t("section3.title2")}
          </Typography>
          <div className={classes.list}>
            {pagesThirdList2.map((page, index) => (
              <Link
                key={index}
                href={page.link}
                className={classes.listItem}
                style={{
                  color: `var(--color-${isGreen() ? "green" : "franquicias"}-100)`,
                }}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={classes.right}>
          <Typography variant="caption" textAlign="right" color="color-white">
            {t("right-text")}
          </Typography>
          <div className={classes.banco}>
            <div className={classes.image}>
              <Image
                src={t("banco-central.image")}
                fill
                alt={"Banco Central"}
              ></Image>
            </div>
            <div className={classes.text}>
              <Typography
                variant="caption"
                textAlign="right"
                color="color-navy-blue-900"
                weight="bold"
                className={classes.title}
              >
                {t("banco-central.title")}
              </Typography>
              <Typography
                variant="caption"
                textAlign="right"
                color="color-navy-blue-900"
              >
                {tRich("banco-central.text")}
              </Typography>
              <Typography
                variant="a"
                textAlign="right"
                color="color-navy-blue-900"
              >
                {tRich("banco-central.link")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.bottom}
        style={{
          backgroundColor: `var(--color-${isGreen() ? "green" : "navy-blue"}-800)`,
        }}
      >
        <div className={classes.bottomContent}>
          <Typography variant="caption" textAlign="left" color="color-white">
            {t("mas-info.dir1")}
          </Typography>
          <Typography variant="caption" textAlign="left" color="color-white">
            {t("mas-info.dir2")}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
