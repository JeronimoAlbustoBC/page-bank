"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import { Card } from "@/components/Atoms/Card";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import Link from "next/link";
import { Typography } from "@/components/Atoms/Typography";
import messages from "@/../messages/pages/faqs.json";
import { getIcon } from "@/components/Atoms/Icons";
import { ToolCard } from "./ToolCard";

export function FAQsPage() {
  const { t, tRich } = useRichTranslations("Content.faqs");
  const quickactions = Object.keys(messages.quickactions);
  const questions = Object.keys(messages.questions.list);

  return (
    <main className={styles.main}>
      <HeroSection variant="one" page="faqs" titleMaxWidth="551px" />
      <div className={styles.quickactions}>
        {quickactions.map((key) => (
          <Link href={t(`quickactions.${key}.link`)} key={key}>
            <Card padding="xl" className={styles.card}>
              {getIcon(t(`quickactions.${key}.icon`))}
              <Typography variant="h5" textAlign="center">
                {tRich(`quickactions.${key}.text`)}
              </Typography>
            </Card>
          </Link>
        ))}
      </div>
      <div className={styles.questions}>
        <div className={styles.content}>
          <Typography
            variant="h1"
            textAlign="left"
            weight="bold"
            color="color-navy-blue-800"
          >
            {tRich(`questions.title`)}
          </Typography>
          <div className={styles.list}>
            {questions.map((item) => (
              <ToolCard key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
