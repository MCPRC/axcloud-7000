import Link from "next/link";

type CoralBrandProps = {
  href?: string;
  label?: string;
  subtitle?: string;
  compact?: boolean;
};

export default function CoralBrand({
  href = "#top",
  label = "安信云首页",
  subtitle = "国内高防 · DDoS 防护",
  compact = false,
}: CoralBrandProps) {
  return <Link className={compact ? "coral-brand coral-brand-compact" : "coral-brand"} href={href} aria-label={label}><svg className="coral-brand-symbol" viewBox="0 0 38 38" fill="none" aria-hidden="true"><path d="M9 26.5h20a6 6 0 0 0 .8-11.95A10.5 10.5 0 0 0 9.5 13.2 6.7 6.7 0 0 0 9 26.5Z" stroke="currentColor" strokeWidth="2.7" strokeLinejoin="round"/><path d="m13 20 5-5 5 5m-5-5v15" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="coral-brand-wordmark"><strong>安信云</strong><small>{subtitle}</small></span></Link>;
}
