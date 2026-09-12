import { Reveal } from "@/components/Reveal";
import styles from "./CallToAction.module.css";
import Link from "next/link";

export function CallToAction() {
  return (
    <Reveal as="section" className={styles.cta}>
      <h2 className={styles.title}>Call to action</h2>
      <p className={styles.lead}>
        If you have a product to ship, a live app that needs fixing, or an MVP to stand up —
        let’s talk. Tell me what you are building. I will reply with a clear next step.
      </p>
      <p className={styles.fillIn}>
        <span className={styles.row}>
          <em className={styles.label}>Email:</em> mukarramasad89@gmail.com
        </span>
        <span className={styles.row}>
          <em className={styles.label}>LinkedIn:</em> <Link href="https://www.linkedin.com/in/mukarram-asad">https://www.linkedin.com/in/mukarram-asad</Link>
        </span>
        <span className={styles.row}>
          <em className={styles.label}>Portfolio:</em> <Link href="https://mukarram-portfolio.netlify.app/">https://mukarram-portfolio.netlify.app/</Link>
        </span>
      </p>
    </Reveal>
  );
}
