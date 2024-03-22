"use client";
import { action } from "./actions";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main onClick={() => action({ foo: "hey" })} className={styles.main}>
      <button>Click on me and then see the console logs</button>
    </main>
  );
}
