import React, { useState } from "react";
import classes from "./main.module.scss";
import { BiX } from "react-icons/bi";
import messages from "@/../messages/components/Navbar.json";
import classnames from "classnames";
import { NavBarItem } from "@/components/Atoms/NavBarItem";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Button } from "@/components/Atoms/Button";

export interface IPageItem {
  label:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray;
  link: string;
  subitems?: IPageItem[];
  breadcrumbText?: string;
}

interface Props {
  onClose: Function;
}
export const Sidebar: React.FC<Props> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { t, tRich } = useRichTranslations("Navbar");
  const router = useRouter();
  const path = usePathname();

  const pagesObject = messages.pages;
  // @ts-ignore
  const pages: IPageItem[] = Object.keys(pagesObject).map((p) => ({
    label: tRich(`pages.${p}.label`),
    link: t(`pages.${p}.link`),
    // @ts-ignore
    ...(pagesObject[p].subitems
      ? {
	  // @ts-ignore
          subitems: Object.keys(pagesObject[p].subitems).map((sub) => ({
            label: tRich(`pages.${p}.subitems.${sub}.label`),
            link: t(`pages.${p}.subitems.${sub}.link`),
          })),
        }
      : null),
  }));

  const handleNavigate = (route: string) => {
    router.push(route);
    handleClose();
  };
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose && onClose();
    }, 200);
  };

  return (
    <>
      <div
        className={classnames(classes.backdrop, { [classes.close]: !isOpen })}
        onClick={handleClose}
      ></div>
      <div
        className={classnames(classes.container, { [classes.close]: !isOpen })}
      >
        <div className={classes.header}>
          <button className={classes.logo} onClick={() => router.push("/")}>
            <Image src="/logo.png" fill alt="Logo" />
          </button>
          <button onClick={handleClose} className={classes.closeButton}>
            <BiX className={classes.icon} />
          </button>
        </div>
        <div className={classes.list}>
          <NavBarItem
            key={t(`tabs.individual.label`)}
            id={t(`tabs.individual.label`)}
            label={t(`tabs.individual.label`)}
            active={false}
            onClick={() => handleNavigate(t(`tabs.individual.link`))}
            className={classes.individualTab}
          />
          <NavBarItem
            key={t(`tabs.business.label`)}
            id={t(`tabs.business.label`)}
            label={t(`tabs.business.label`)}
            active={false}
            onClick={() => handleNavigate(t(`tabs.business.link`))}
            className={classes.businessTab}
          />
          {pages.map((page) => (
            <NavBarItem
              key={page.label.toString()}
              id={page.link}
              label={page.label}
              active={path === page.link}
              subitems={(page.subitems as any[])?.map((e) => ({
                ...e,
                id: e.link,
                onClick: () => handleNavigate(e.link),
                active: path === e.link,
              }))}
              onClick={
                page.subitems ? () => {} : () => handleNavigate(page.link)
              }
            />
          ))}
        </div>
        <div className={classes.bottomButtons}>
          <Button
            variant="secondary"
            onClick={() => router.push("/abri-tu-cuenta")}
          >
            {t("open-account")}
          </Button>
          <Button
            variant="primary"
            onClick={() => router.push("https://hb.bancodecomercio.com.ar/login")}
          >
            {t("home-banking")}
          </Button>
        </div>
      </div>
    </>
  );
};
