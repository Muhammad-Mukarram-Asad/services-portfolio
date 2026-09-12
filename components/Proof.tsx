import { CountUp } from "@/components/CountUp";
import styles from "./Proof.module.css";

export function Proof() {
  return (
    <div className={styles.proof} aria-label="Proof points">
      <article className={styles.card}>
        <span className={styles.stat}>
          <CountUp end={3} prefix="~" suffix=" yrs" />
        </span>
        <p className={styles.copy}>
          Professional experience, internship through permanent engineering role
        </p>
      </article>
      <article className={styles.card}>
        <span className={styles.stat}>
          <CountUp end={3} suffix=" banks" />
        </span>
        <p className={styles.copy}>
          Personal finance product live with an international bank, plus two Pakistani
          banks live or in UAT
        </p>
      </article>
      <article className={styles.card}>
        <span className={styles.stat}>
          <span className={styles.live} aria-hidden="true" />
          Real-time
        </span>
        <p className={styles.copy}>
          Live dashboards, AI-powered features, and Figma-to-React product builds
        </p>
      </article>
    </div>
  );
}
