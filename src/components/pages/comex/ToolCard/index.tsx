import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowTop } from "@/components/Atoms/Icons/svgs/ArrowTop";
import { getIcon } from "@/components/Atoms/Icons";
import styles from "../page.module.scss";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Typography } from "@/components/Atoms/Typography";
import messages from "@/../messages/pages/comex.json";
import classNames from "classnames";
import { Button } from "@/components/Atoms/Button";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";

export const ToolCard = ({
  page = "comex.greenBox",
  item,
}: {
  item: string;
  page?: string;
}) => {
  const { t } = useRichTranslations(`Content.${page}.list`);
  const [isOpened, setOpened] = useState(false);
  const params = useSearchParams();
  const searchParam = params.get("q");
  const cardRef = useRef<any>(null);
  const router = useRouter();
  useEffect(() => {
    let timer: any;
    if (searchParam?.split("-")[0] === item && isOpened === false) {
      setOpened(true);
      timer = setTimeout(() => {
        cardRef?.current.scrollIntoView({
          behavior: "smooth",
        });
        try {
          document
            .querySelector(`#${item}-${searchParam?.split("-")[1]}`)
            // @ts-ignore
            ?.firstChild?.click();
        } catch (err) {}
      }, 400);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchParam]);

  const list =
    // @ts-ignore
    messages.greenBox.list[item].list;

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: "var(--color-white)",
      }}
      ref={cardRef}
    >
      <div className={styles.image}>
        {getIcon(t(`${item}.icon`), { className: styles.icon })}
      </div>
      <div
        className={classNames(styles.center, {
          [styles.paddingRight]: list === undefined,
        })}
      >
        <div className={styles.title}>
          <Typography
            variant="h4"
            textAlign="left"
            color="color-navy-blue-800"
            weight="bold"
          >
            {t(`${item}.title`)}
          </Typography>
        </div>
        <div className={styles.text}>
          <Typography
            variant="subtitle3"
            textAlign="left"
            color="color-dark-gray-800"
          >
            {t(`${item}.text`)}
          </Typography>
        </div>
        {list && (
          <ul className={classNames(styles.list, { [styles.hide]: !isOpened })}>
            {Object.keys(list).map((i) => (
              /*TODO: YONT Modifica los PDF de COMEX Ocultamos los PDF hasa que sean actualizados, 21/11/2024 00:30  <li key={i} className={styles.hide}>*/
              <li key={i}>
                <details id={`${item}-${i}`}>
                  <summary>{t(`${item}.list.${i}.title`)}</summary>
                  <ul className={classNames(styles.list)}>
                    {Object.keys(list[i].list).map((sub) => (
                      <li key={sub}>
                        <Typography
                          variant="a"
                          textAlign="left"
                          color="color-dark-gray-800"
                          href={t(`${item}.list.${i}.list.${sub}.link`)}
                          className={styles.link}
                        >
                          {t(`${item}.list.${i}.list.${sub}.text`)}{" "}
                          {getIcon("Download")}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        )}
        {!list && (
          <Button
            variant="primary"
            className={styles.ctaButton}
            onClick={() => {
              setDropdownValue(t(`${item}.formDefault`));
              router.push(t(`${item}.ctaLink`));
            }}
          >
            {t(`${item}.ctaText`)}
          </Button>
        )}
      </div>
      {list && (
        <button
          className={classNames(styles.icon, { [styles.rotate]: !isOpened })}
          onClick={() => setOpened(!isOpened)}
        >
          <ArrowTop />
        </button>
      )}
    </div>
  );
};
