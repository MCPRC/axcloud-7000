import type { Viewport } from "next";
import "../../account-theme.css";
import { setRequestLocale } from "next-intl/server";
import ConsoleShell from "@/components/console/ConsoleShell";
import { MotionProvider } from "@/components/motion/primitives";

export const metadata = { title: "Console", robots: { index: false }, icons: { icon: "/anxinyun/favicon.svg" } };
export const viewport: Viewport = { themeColor: "#FEFEFE" };

export default async function ConsoleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <MotionProvider>
      <ConsoleShell>{children}</ConsoleShell>
    </MotionProvider>
  );
}
