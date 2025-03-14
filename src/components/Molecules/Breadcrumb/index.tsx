"use client";
import React from "react";
import { Typography } from "@/components/Atoms/Typography";
import { usePathname } from "next/navigation";
import classes from "./main.module.scss";
import messages from "@/../messages/components/Navbar.json";
import { useTranslations } from "next-intl";
import { IPageItem } from "../Sidebar";

interface Props {
  textColor?: string;
}

export const Breadcrumb: React.FC<Props> = ({ textColor = "color-white" }) => {
  const path = usePathname();
  const t = useTranslations("Navbar");

  if (path === "/") return null;

  const pagesObject = messages.pages;

  const pages: IPageItem[] = Object.keys(pagesObject)
    .map((p) => [
      {
        label: t(`pages.${p}.label`),
        link: t(`pages.${p}.link`) || t(`pages.${p}.label`),
        breadcrumbText: t(`pages.${p}.breadcrumbText`),
      },
      // @ts-ignore
      ...(pagesObject[p].subitems
        ? // @ts-ignore
          Object.keys(pagesObject[p].subitems).map((sub) => ({
            label: t(`pages.${p}.subitems.${sub}.label`),
            link: t(`pages.${p}.subitems.${sub}.link`),
            breadcrumbText: t(`pages.${p}.subitems.${sub}.breadcrumbText`),
          }))
        : []),
    ])
    .flat();

  const getColor = () => {
    if (textColor.startsWith("rgb") || textColor.startsWith("#")) {
      return textColor;
    }
    if (textColor.startsWith("color")) {
      return `var(--${textColor})`;
    }
    return "#000000";
  };

  return (
    <div className={classes.container}>
      {path.split("/").map((p, index) => {
        if (index === 0) {
          return (
            <Typography
              key={index}
              variant="a"
              href={"/"}
              textAlign="left"
              color={textColor}
              target="_self"
            >
              {t("home")}
            </Typography>
          );
        }
        const page = pages.find((page) => `/${p}` === page.link);
        return page ? (
          <React.Fragment key={index}>
            {<p style={{ color: getColor() }}>&gt;</p>}
            <Typography
              variant="a"
              href={page?.link}
              textAlign="left"
              color={textColor}
              target="_self"
            >
              {page?.breadcrumbText ?? page?.breadcrumbText}
            </Typography>
          </React.Fragment>
        ) : null;
      })}
    </div>
  );
};
