"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const logos = [
  ["新华三 H3C", "h3c.png"],
  ["戴尔 Dell", "dell.svg"],
  ["惠普 HP", "hp.svg"],
  ["慧与 HPE", "hpe.svg"],
  ["华为 Huawei", "huawei.svg"],
  ["IBM", "ibm.svg"],
  ["联想 Lenovo", "lenovo.svg"],
  ["浪潮 Inspur", "inspur.svg"],
  ["超微 Supermicro", "supermicro.svg"],
  ["思科 Cisco", "cisco.svg"],
];

export default function HardwarePartners() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hardware-partners section-pad" id="service" aria-labelledby="hardware-partners-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="hardware-partners-title">生态合作伙伴</h2>
          <button
            type="button"
            className="hardware-partner-toggle icon-button"
            aria-label={paused ? "继续滚动合作伙伴 Logo" : "暂停滚动合作伙伴 Logo"}
            onClick={() => setPaused(value => !value)}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
        <div className="hardware-partner-viewport" ref={viewportRef} tabIndex={0} role="group" aria-label="合作伙伴 Logo">
          <div className="hardware-partner-track" data-playing={visible && !paused}>
            {[false, true].map(copy => (
              <ul className="hardware-partner-row" key={String(copy)} aria-hidden={copy || undefined}>
                {logos.map(([name, file]) => (
                  <li key={file}>
                    <img src={`/anxinyun/images/hardware-logos/${file}`} alt={copy ? "" : name} width={136} height={46} loading="lazy" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
