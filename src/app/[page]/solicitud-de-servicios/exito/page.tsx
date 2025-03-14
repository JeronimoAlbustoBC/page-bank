"use client";
import styles from "./page.module.scss";
import { PageTemplate } from "@/components/PageTemplate";
import { SuccessCard } from "@/components/Molecules/SuccessCard";
import { Breadcrumb } from "@/components/Molecules/Breadcrumb";

export default function Page({
  params: { page },
}: {
  params: { page: string };
}) {
  return (
    <PageTemplate>
      <main className={styles.main}>
        <Breadcrumb textColor="color-black" />
        <div className={styles.content}>
          <SuccessCard />
        </div>
      </main>
    </PageTemplate>
  );
}
