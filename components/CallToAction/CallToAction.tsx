import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import styles from "./CallToAction.module.css";

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
          <em className={styles.label}>Email:</em>{" "}
          <a className={styles.link} href="mailto:mukarramasad89@gmail.com">
            mukarramasad89@gmail.com
          </a>
        </span>
        <span className={styles.row}>
          <em className={styles.label}>LinkedIn:</em>{" "}
          <Link
            className={styles.link}
            href="https://www.linkedin.com/in/mukarram-asad"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/mukarram-asad
          </Link>
        </span>
        <span className={styles.row}>
          <em className={styles.label}>Portfolio:</em>{" "}
          <Link
            className={styles.link}
            href="https://mukarram-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            mukarram-portfolio.netlify.app
          </Link>
        </span>
      </p>
    </Reveal>
  );
}
