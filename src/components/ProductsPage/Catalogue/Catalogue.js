import React, { Component } from "react";
import { Card, Accordion } from "react-bootstrap";
import styles from "./Catalogue.module.css";
import main from "../../../Common.module.css";
import Products from "../Products/Products";
import { align_products } from "../../../components/ProductsPage/Products/Products.module.css";

class Catalogue extends Component {
  state = {
    value: "",
    orderBy: "",
  };
  handleDisplayProducts = (arr) => () => {
    this.setState({
      value: arr[1],
      orderBy: arr[0],
    });
  };
  render() {
    return (
      <div className={align_products}>
        <Accordion className={styles.accordionWidth}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Produkty ekologiczne
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <div id={styles.leftsideMenu}>
                <ul className={main.turnOfListStyle}>
                  <li>
                    <a
                      onClick={this.handleDisplayProducts([
                        "category",
                        "papier toaletowy",
                      ])}
                      href="#1"
                    >
                      PAPIER TOALETOWY
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={this.handleDisplayProducts([
                        "category",
                        "dezynfekcja",
                      ])}
                      href="#2"
                    >
                      DEZYNFEKCJA
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Products orderBy={this.state.orderBy} value={this.state.value} />
      </div>
    );
  }
}
export default Catalogue;
