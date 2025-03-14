import { useTranslations } from "next-intl";
import Link from "next/link";

export const useRichTranslations = (prefix?: string) => {
  const t = useTranslations(prefix);

  const richFunction = (text: string) => {
    return t.rich(text, {
      br: () => <br />,
      a: (c) => <a>{c}</a>,
      ul: (c) => <ul>{c}</ul>,
      li: (c) => <li>{c}</li>,
      strong: (c) => <strong>{c}</strong>,
      consultas: (c) => (
        <Link href="/consulta/solicitud-de-servicios">{c}</Link>
      ),
      baja: (c) => <Link href="/consulta/solicitud-de-servicios">{c}</Link>,
      mail: (c) => <Link href={`mailto:${c}`}>{c}</Link>,
      link: (c) => (
        <a href={`${c}`} style={{ display: "inline" }}>
          {c}
        </a>
      ),
    });
  };

  const exists = (text: string) => {
    try {
      return richFunction(text) && richFunction(text) !== `${prefix}.${text}`;
    } catch (err) {
      return false;
    }
  };
  return { tRich: richFunction, t, exists };
};
