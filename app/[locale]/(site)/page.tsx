import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegacyHome from "@/components/home/LegacyHome";
import Landing from "@/components/landing/Landing";
import SiteShell from "@/components/site/SiteShell";
import { MotionProvider } from "@/components/motion/primitives";
import AgentWidget from "@/components/agent/AgentWidget";
import "../../account-theme.css";

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
  if (locale === "zh") {
    return (
      <MotionProvider>
        <Landing />
        <div className="ax-account landing-agent">
          <AgentWidget suggestions={[
            "国内高防选型需要准备哪些信息？",
            "高防游戏盾适合什么业务？",
            "国内高防方案如何选择部署地域？",
            "如何申请 ICP 备案？",
          ]} />
        </div>
      </MotionProvider>
    );
  }
  return <SiteShell params={params}><LegacyHome params={params} /></SiteShell>;
}
