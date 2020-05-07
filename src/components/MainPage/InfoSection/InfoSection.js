import React from "react";
import styles from "./InfoSection.module.css";

const is = () => {
  return (
    <section id="info" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 align-self-center">
            <h3>O dostawcach</h3>
            <p>
              Zaopatrujemy sie w najlepszych hurtowniach w Turcji. Jakość
              gwarantowana albo zwrot pieniędzy!
            </p>
            <a href="about.html" className="btn btn-outline-danger btn-lg">
              Zobacz więcej
            </a>
          </div>
          <div className="col-md-6">
            <img
              src={"/other/cover.jpg"}
              alt=""
              id={styles.grayscale}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default is;
