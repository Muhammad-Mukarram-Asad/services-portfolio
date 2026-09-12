import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header>
      <p className={styles.kicker}>
        <strong className={styles.brand}>React &amp; Next.js</strong>
        <span className={styles.skills}>Pixel-perfect UI · Real-time apps</span>
      </p>

      <h1 className={styles.headline}>
        <span className={styles.line}>Pixel-perfect UIs.</span>
        <span className={styles.line}>Production-ready web apps.</span>
        <span className={styles.line}>Already live inside bank apps.</span>
      </h1>

      <p className={styles.identity}>
        <span>
          <b className={styles.name}>Muhammad Mukarram Asad</b>
        </span>
        <span>Full Stack Developer — Frontend Focused</span>
      </p>
    </header>
  );
}
