import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["zh", "en"],
  defaultLocale: "zh",
  // 显式使用 /zh 和 /en，避免生产环境下默认语言重写循环。
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
