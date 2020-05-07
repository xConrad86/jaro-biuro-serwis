import React from "react";
import styles from "./Bestsellers.module.css";

const bestsellers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={[styles.box, styles.a].join(" ")}>
        <img
          className={styles.adjustPhoto}
          src={"/bestsellers/podajnik_na_plyn.jpg"}
          alt=""
        />
      </div>
      <div className={[styles.box, styles.b].join(" ")}>
        <img
          className={styles.adjustPhoto}
          src={"/bestsellers/zszywacz.jpg"}
          alt=""
        />
      </div>
      <div className={[styles.box, styles.c].join(" ")}>
        <img
          className={styles.adjustPhoto}
          src={"/bestsellers/przybornik.jpg"}
          alt=""
        />
      </div>
      <div className={[styles.box, styles.d].join(" ")}>
        <img
          className={styles.adjustPhoto}
          src={"/bestsellers/tacka_dokumenty.jpg"}
          alt=""
        />
      </div>
      <div className={[styles.box, styles.e].join(" ")}>
        <img
          className={styles.adjustPhoto}
          src={"/bestsellers/wieczne_pioro.jpg"}
          alt=""
        />
      </div>
      <div className={[styles.box, styles.f].join(" ")}>
        <img
          className={styles.adjustPhoto}
          src={"/bestsellers/papier_ksero.jpg"}
          alt=""
        />
      </div>
    </div>
  );
};
export default bestsellers;
