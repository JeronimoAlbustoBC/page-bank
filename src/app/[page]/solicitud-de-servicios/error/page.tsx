"use client";
import styles from "./page.module.scss";
import { PageTemplate } from "@/components/PageTemplate";
import { ErrorCard } from "@/components/Molecules/ErrorCard";
import { Breadcrumb } from "@/components/Molecules/Breadcrumb";

export default function Page({
  params: { page },
}: {
  params: { page: string };
}) {
  return (
    <PageTemplate>
      <main className={styles.main}>
        <Breadcrumb textColor={"color-black"} />
        <div className={styles.content}>
          <ErrorCard />
        </div>
      </main>
    </PageTemplate>
  );
}
