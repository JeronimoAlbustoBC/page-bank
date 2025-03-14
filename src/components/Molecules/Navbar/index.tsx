"use client";
import React, { useState } from "react";
import classes from "./main.module.scss";
import { Button } from "@/components/Atoms/Button";
import { Typography } from "@/components/Atoms/Typography";
import { BurgerMenu } from "@/components/Atoms/Icons/BurgerMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Sidebar } from "../Sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations("Navbar");

  return (
    <>
      <div className={classes.container}>
        <nav>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={classes.burger}
          >
            <BurgerMenu width={46}></BurgerMenu>
            <Typography
              variant="body2"
              textAlign="center"
              color="color-dark-grey-900"
            >
              {t("menu")}
            </Typography>
          </button>
          <button className={classes.logo} onClick={() => router.push("/")}>
            <Image src="/logo.png" fill alt="Logo" />
          </button>
          <div className={classes.rightButtons}>
            <Button
              variant="secondary"
              onClick={() => window.open("https://inversiones.bancodecomercio.com.ar/", '_blank')}
            >
              {t("open-account")}
            </Button>
            <Button
              variant="primary"
              onClick={() => window.open("https://hb.bancodecomercio.com.ar/login", '_blank')}
            >
              {t("home-banking")}
            </Button>
          </div>
        </nav>
      </div>
      {isOpen && <Sidebar onClose={() => setIsOpen(false)} />}
    </>
  );
};
