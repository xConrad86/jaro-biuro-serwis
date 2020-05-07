import React, { useState } from "react";
import styles from "./Product.module.css";

export default function ProductListItem(props) {
  const [isShow, setIsShow] = useState("show");

  return (
    <div
      className={styles.product_list_item}
      onMouseMove={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
        alt="Nie można wyświetlić zdjęcia"
      />
      <div className={styles.prod_name}>{props.product.name}</div>
      <div className={styles.prod_desc}>{props.product.description}</div>
      <div className={styles.prod_price}>{props.product.price} zl</div>
    </div>
  );
}
