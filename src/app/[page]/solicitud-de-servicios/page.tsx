"use client";
import styles from "./page.module.scss";
import { PageTemplate } from "@/components/PageTemplate";
import { HeroSection } from "@/components/Organisms/HeroSection";
import { notFound, usePathname, useRouter } from "next/navigation";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Typography } from "@/components/Atoms/Typography";
import Image from "next/image";
import { Card } from "@/components/Atoms/Card";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/Atoms/Button";
import messages from "@/../messages/pages/solicitudDeServicios.json";
import { IPageItem } from "@/components/Molecules/Sidebar";
import Navbar from "@/../messages/components/Navbar.json";
import {
  validaEmail,
  validaId,
  validaNombre,
  validaTelefono,
} from "@/utils/validations";
import classNames from "classnames";
import ReCAPTCHA from "react-google-recaptcha-enterprise";
import { Sucursales } from "@/components/sucursales";

interface Form {
  nombre: string;
  id: string;
  razonSocial: string;
  importacionBienes: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const extraPagesAllowed = ["individuos", "consulta"];
export default function SolicitudDeServicios({
  params: { page },
}: {
  params: { page: string };
}) {
  const { t, exists } = useRichTranslations("Content.solicitudDeServicios");
  const { t: tNav } = useRichTranslations("Navbar");
  const [loaded, setLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const pagesObject = Navbar.pages;
  const pages = useMemo<IPageItem[]>(
    () =>
      Object.keys(pagesObject)
        .map((p) => [
          {
            label: tNav(`pages.${p}.label`),
            link: tNav(`pages.${p}.link`) || tNav(`pages.${p}.label`),
            breadcrumbText: tNav(`pages.${p}.breadcrumbText`),
          },
          // @ts-ignore
          ...(pagesObject[p].subitems
            ? // @ts-ignore
              Object.keys(pagesObject[p].subitems).map((sub) => ({
                label: tNav(`pages.${p}.subitems.${sub}.label`),
                link: tNav(`pages.${p}.subitems.${sub}.link`),
                breadcrumbText: tNav(
                  `pages.${p}.subitems.${sub}.breadcrumbText`
                ),
              }))
            : []),
        ])
        .flat(),
    [pagesObject, tNav]
  );

  useEffect(() => {
    if (
      !extraPagesAllowed.includes(page) &&
      pages.findIndex((p) => `/${page}` === p.link) === -1
    ) {
      notFound();
    } else {
      setLoaded(true);
    }
  }, [pages, page]);

  const fields = Object.keys(messages.form.fields);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [formValues, setFormValues] = useState<Form>({
    nombre: "",
    id: "",
    razonSocial: "",
    importacionBienes: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [formErrors, setFormErrors] = useState<Form>({
    nombre: "",
    id: "",
    razonSocial: "",
    importacionBienes: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  useEffect(() => {
    const form = JSON.parse(sessionStorage.getItem("form") ?? "{}");
    sessionStorage.setItem("form", "{}");
    setFormValues((prev) => ({ ...prev, ...form }));
  }, []);

  if (!loaded) return null;

  const onValueChange = (fieldName: string, newValue: string) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: newValue }));
  };

  const onValueBlur = (fieldName: string, newValue: string) => {
    switch (fieldName) {
      case "id":
        if (!validaId(newValue)) {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "error" }));
        } else {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
        }
        break;
      case "nombre":
        if (!validaNombre(newValue)) {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "error" }));
        } else {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
        }
        break;
      case "telefono":
        const val = newValue.replace(/[^0-9.]/g, "");
        if (!validaTelefono(val)) {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "error" }));
        } else {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
        }
        break;

      case "email":
        if (!validaEmail(newValue)) {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "error" }));
        } else {
          setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
        }
        break;
      default:
        break;
    }
  };

  const isValidForm = () => {
    if (!captchaValid) {
      return false;
    }
    if (!validaId(formValues.id)) {
      return false;
    }
    if (!validaNombre(formValues.nombre)) {
      return false;
    }
    const val = formValues.telefono.replace(/[^0-9.]/g, "");
    if (!validaTelefono(val)) {
      return false;
    }
    if (!validaEmail(formValues.email)) {
      return false;
    }
    if (Object.values(formErrors).some((e: string) => e.length > 0)) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    sessionStorage.setItem("form", JSON.stringify(formValues));
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formValues),
    })
      .then((res) => {
        if (res.status === 500) {
          throw new Error();
        }
        setIsSubmitting(false);
        router.push("solicitud-de-servicios/exito");
      })
      .catch((err) => {
        setIsSubmitting(false);
        router.push("solicitud-de-servicios/error");
      });
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaValid(token !== null);
  };
  return (
    <PageTemplate>
      <main className={styles.main}>
        <HeroSection
          variant="one"
          page="solicitudDeServicios"
          titleMaxWidth="551px"
        />
        <div className={styles.container}>
          <div className={styles.greenBackground} />
          <div className={styles.content}>
            <div className={styles.leftSide}>
              <Typography
                variant="h5"
                textAlign="left"
                weight="600"
                color="color-navy-blue-800"
                className={styles.title}
              >
                {t("side.text")}
              </Typography>
              <div className={styles.image}>
                <Image src={t("side.image")} alt={t("side.imageAlt")} fill />
              </div>
            </div>
            <div className={styles.rightSide}>
                {}
              <Card padding="xl" className={styles.form}>
                <Typography
                  variant="subtitle3"
                  textAlign="left"
                  weight="600"
                  color="color-navy-blue-800"
                >
                  {t("form.title")}
                </Typography>
             
                {fields.map((field) => {
                  switch (t(`form.fields.${field}.type`)) {
                    case "textarea":
                      return (
                        <textarea
                          key={field}
                          className={styles.field}
                          rows={4}
                          placeholder={t(`form.fields.${field}.label`)}
                          // @ts-ignore
                          value={formValues[field] as string}
                          onChange={(e) => onValueChange(field, e.target.value)}
                        />
                      );
                    case "dropdown":
                      return (
                        <select
                          key={field}
                          className={styles.field}
                          // @ts-ignore
                          value={formValues[field] as string}
                          onChange={(e) => onValueChange(field, e.target.value)}
                        >
                          {Object.keys(
                            // @ts-ignore
                            messages.form.fields[field].dropdownOptions
                          )
                            .sort()
                            .map((op) => (
                              <option value={op} key={op}>
                                {t(
                                  `form.fields.${field}.dropdownOptions.${op}`
                                )}
                              </option>
                            ))}
                        </select>
                      );
                    default:
                      return (
                        <div className={styles.fieldContainer}>
                          <input
                            key={field}
                            type={
                              exists(`form.fields.${field}.type`)
                                ? t(`form.fields.${field}.type`)
                                : "text"
                            }
                            className={classNames(styles.field, {
                              [styles.errorField]:
                                //  @ts-ignore
                                (formErrors[field] as string).length > 0,
                            })}
                            placeholder={t(`form.fields.${field}.label`)}
                            // @ts-ignore
                            value={formValues[field] as string}
                            onChange={(e) =>
                              onValueChange(field, e.target.value)
                            }
                            onBlur={(e) => onValueBlur(field, e.target.value)}
                          />
                          {/* @ts-ignore */}
                          {(formErrors[field] as string).length > 0 && (
                            <Typography
                              variant="body3"
                              textAlign="left"
                              className={styles.error}
                              color="color-alert-500"
                            >
                              {t("form.error")}
                            </Typography>
                          )}
                        </div>
                      );
                  }
                })}
                {/* <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
                  onChange={onCaptchaChange}
                /> */ }
                <ReCAPTCHA
                  title="captcha"
                  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
                  theme="light"
                  /*TODO: Yont modifica el alineado del recapcha 21/11/2024 00:32 style={{ textAlign: "-webkit-center" }}*/
                  /*style={{ textAlign: "-webkit-center" }}*/
                  onChange={onCaptchaChange}
                  onErrored={() => onCaptchaChange(null)}
                  lang={"es"}
                />
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={!isValidForm() || isSubmitting}
                >
                  {isSubmitting ? t("form.submitting") : t("form.ctaText")}
                </Button>
              </Card>
                {}
            </div>
          </div>
        </div>
        <Sucursales />
      </main>
    </PageTemplate>
  );
}
