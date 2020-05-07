import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import styles from "./Contact.module.css";

const contactForm = () => {
  return (
    <div>
      <h3 className={styles.alignPhoneNumber}> TELEFON: 765 987 598</h3>
      <div className={styles.contact_form}>
        <Form>
          <div className={styles.contact_form__items}>
            <Form.Row>
              <Form.Group controlId="formGridFirstname">
                <Form.Label>Imię</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGridLastname">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridMessage">
                <Form.Label>Wiadomość</Form.Label>
                <div className={styles.messageAreaWidth}>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    type="text"
                    placeholder=""
                  />
                </div>
              </Form.Group>
            </Form.Row>
            <Button variant="secondary" type="submit">
              Wyślij wiadomość
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default contactForm;
