import type { Viewport } from "next";
import "../../account-theme.css";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import CoralBrand from "@/components/site/CoralBrand";
import LangSwitch from "@/components/site/LangSwitch";
import LoginForm from "@/components/site/LoginForm";

export const viewport: Viewport = { themeColor: "#FEFEFE" };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "login" });
  return { title: t("submit"), icons: { icon: "/anxinyun/favicon.svg" } };
}

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("login");
  const points = t.raw("asidePoints") as string[];

  return (
    <div className="ax-account account-login min-h-screen grid lg:grid-cols-[1fr_1.1fr]">
      <aside className="relative hidden lg:flex flex-col justify-between account-login-aside text-ink p-12 overflow-hidden">
        <div className="relative"><CoralBrand href={`/${locale}`} subtitle={locale === "en" ? "DDoS protection" : undefined} /></div>
        <div className="relative mt-auto mb-10 max-w-[26em]">
          <h2 className="text-[36px] font-semibold leading-tight">{t("asideTitle")}</h2>
          <ul className="mt-8 space-y-3 text-muted" role="list">
            {points.map(p => (
              <li key={p} className="flex gap-3">
                <Check size={18} className="text-cobalt shrink-0 mt-1" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-[13px] text-muted">© 2026 AXCloud</p>
      </aside>

      <main id="main" className="flex flex-col">
        <div className="flex items-center justify-between h-16 px-6">
          <span className="lg:hidden"><CoralBrand href={`/${locale}`} subtitle={locale === "en" ? "DDoS protection" : undefined} /></span>
          <span className="ml-auto"><LangSwitch /></span>
        </div>
        <div className="flex-1 grid place-items-center px-6 pb-16">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
