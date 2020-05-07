import React from "react";
import styles from "./HomeHeadingSection.module.css";
import main from "../../../Common.module.css";
import { Button } from "react-bootstrap";

const hhs = () => {
  return (
    <section id={styles.home_heading} className="py-5">
      <div className={main.dark_overlay}>
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1>Nie jesteś zdecydowany?</h1>
              <p className="d-xs-block d-md-block">
                Zarejestruj się już dziś i odbierz 5% rabatu na wszystkie
                artykuły!
              </p>
              <Button variant="success">Zarejestruj się!</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default hhs;
