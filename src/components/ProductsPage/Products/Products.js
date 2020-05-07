import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import styles from "./Products.module.css";

class Products extends Component {
  state = {
    data: null,
    category: this.props.orderBy,
    value: this.props.value,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value, category: nextProps.orderBy };
    } else return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      const query =
        'https://jaro-biuro-serwis.firebaseio.com/products.json?orderBy="' +
        this.state.category +
        '"' +
        '&equalTo="' +
        this.state.value +
        '"';
      axios.get(query).then((response) => {
        const result = Object.keys(response.data).map(function (key) {
          return response.data[key];
        });
        this.setState({ data: result });
      });
    }
  }
  render() {
    let listOfProducts = null;
    if (this.state.data) {
      listOfProducts = (
        <div className={styles.product_listing}>
          {this.state.data.map((product) => (
            <Product
              key={product.id}
              product={product}
              pathname={`/Produkt/${product.id}`}
            />
          ))}
        </div>
      );
    }
    return <div>{listOfProducts}</div>;
  }
}

export default Products;
