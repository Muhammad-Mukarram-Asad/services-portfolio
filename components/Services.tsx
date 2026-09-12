import { Reveal } from "@/components/Reveal";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    title: "Product UI & Web Development",
    items: [
      "Pixel-perfect Figma-to-React / Next.js builds",
      "Responsive layouts that hold on every screen",
      "Clean, reusable component systems",
      "Admin dashboards and data-heavy product screens",
    ],
    benefit:
      "You launch an interface that looks intentional in the demo — and still looks that way after real users arrive.",
  },
  {
    num: "02",
    title: "Production Debugging & Application Care",
    items: [
      "Diagnose and fix issues in live apps and websites",
      "Stabilize regressions without a rewrite",
      "Maintain and improve existing codebases",
      "Performance work that users actually feel",
    ],
    benefit:
      "The product you already have starts working again — faster, calmer, and without throwing away what is already live.",
  },
  {
    num: "03",
    title: "Full-Stack Product Engineering",
    items: [
      "API integration and disciplined state management",
      "Real-time features and live data views",
      "Payment flows and AI-powered product features",
      "Full-stack MVPs for startups and internal tools",
    ],
    benefit:
      "One builder from interface to working product — fast enough for a startup, careful enough for a bank.",
  },
];

export function Services() {
  return (
    <section className={styles.section}>
      <Reveal>
        <h2>Core services</h2>
      </Reveal>
      <div className={styles.list}>
        {services.map((service, index) => (
          <Reveal key={service.num} as="article" className={styles.card} delay={index * 90}>
            <header className={styles.heading}>
              <span className={styles.num}>{service.num}</span>
              <h3 className={styles.title}>{service.title}</h3>
            </header>
            <ul className={styles.items}>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.benefit}>
              <strong>Benefit:</strong> {service.benefit}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
