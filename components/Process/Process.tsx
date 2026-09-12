import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import styles from "./Process.module.css";

const steps = [
  {
    n: 1,
    title: "Scope the work",
    copy: "Share the product, the pain, and the deadline. I come back with a clear plan, a timeline, and what “done” looks like.",
  },
  {
    n: 2,
    title: "Build in the open",
    copy: "You review working UI, not slide decks. We iterate on the real product until it feels right.",
  },
  {
    n: 3,
    title: "Ship and steady",
    copy: "I help you launch, fix what production surfaces, and leave the codebase in a state your team can own.",
  },
];

export function Process() {
  return (
    <section className={styles.section}>
      <Reveal>
        <h2 className={styles.heading}>How it works</h2>
      </Reveal>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <Reveal key={step.n} as="article" className={styles.step} delay={index * 110}>
            <div className={styles.headingRow}>
              <span className={styles.num}>
                <CountUp prefix="0" end={step.n} duration={800} />
              </span>
              <h3 className={styles.title}>{step.title}</h3>
            </div>
            <p className={styles.copy}>{step.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
