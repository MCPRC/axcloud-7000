import { getTranslations, setRequestLocale } from "next-intl/server";
import Catalog from "@/components/home/Catalog";
import { products, categories } from "@/lib/catalog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("allProducts") };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("catalog");
  return (
    <>
      <section className="site-theme-hero text-ink border-b border-line">
        <div className="shell py-16 lg:py-20">
          <h1 className="text-[36px] sm:text-[48px] font-semibold">{t("title")}</h1>
          <p className="mt-4 text-lg text-muted max-w-[36em]">
            {locale === "en"
              ? `${categories.length} categories and ${products.length} products, to compare when planning deployment and protection.`
              : `${categories.length} 大类、${products.length} 款产品，用于比较部署配置、业务接入与防护需求。`}
          </p>
        </div>
      </section>
      <Catalog headless />
    </>
  );
}
