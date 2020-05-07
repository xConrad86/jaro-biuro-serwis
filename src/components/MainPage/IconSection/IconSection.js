import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import { turnOfListStyle } from "../../../Common.module.css";

const iconSection = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <div className="col-md-4 mb-4 text-center">
            <Image src="https://img.icons8.com/pastel-glyph/64/000000/length-1.png" />
            <h3>Artykuły biurowe</h3>
            <ul className={turnOfListStyle}>
              <li>papier do drukarek</li>
              <li>zeszyty</li>
              <li>etykiety samoprzylepne</li>
              <li>koperty listowe</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <Image src="https://img.icons8.com/ios-filled/50/000000/printer-door-open.png" />
            <h3>Materiały eksploatacyjne</h3>
            <ul className={turnOfListStyle}>
              <li>tusze do drukarek</li>
              <li>dysze</li>
              <li>tonery do drukarek laserowych</li>
              <li>tonery do drukarek igłowych</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <Image src="https://img.icons8.com/ios-filled/50/000000/toilet-paper.png" />
            <h3>Artykuły chemiczne</h3>
            <ul className={turnOfListStyle}>
              <li>ręczniki papierowe</li>
              <li>mydło w płynie</li>
              <li>rękawiczki</li>
              <li>worki</li>
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default iconSection;
