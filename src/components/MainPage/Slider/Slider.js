import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Slider.module.css";

const slider = () => {
  return (
    <div className={styles.adjustSlider}>
      <Carousel>
        <Carousel.Item>
          <img
            className={styles.carousel_container}
            src={"/other/image1.png"}
            alt="Pierwszy slajd"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.carousel_container}
            src={"/other/image2.jpg"}
            alt="Drugi slajd"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.carousel_container}
            src={"/other/image3.jpg"}
            alt="Trzeci slajd"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default slider;
