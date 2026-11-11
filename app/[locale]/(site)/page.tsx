import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegacyHome from "@/components/home/LegacyHome";
import Landing from "@/components/landing/Landing";
import SiteShell from "@/components/site/SiteShell";
import { MotionProvider } from "@/components/motion/primitives";

type HomeProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "zh") return {};
  return {
    title: { absolute: "安信云 · 国内高防与 DDoS 防护" },
    description: "安信云专注国内高防与 DDoS 防护，为网站、游戏和在线服务提供防护选型参考。",
    icons: { icon: "/anxinyun/favicon.svg" },
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "zh") return <MotionProvider><Landing /></MotionProvider>;
  return <SiteShell params={params}><LegacyHome params={params} /></SiteShell>;
}
