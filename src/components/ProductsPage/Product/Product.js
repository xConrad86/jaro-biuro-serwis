import React, { useState } from "react";
import styles from "./Product.module.css";
import CustomLink from "./ProductLink";

export default function ProductListItem(props) {
  // eslint-disable-next-line no-unused-vars
  const [isShow, setIsShow] = useState("show");

  return (
    <div
      className={styles.product_list_item}
      onMouseMove={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <CustomLink
        tag="div"
        params={props}
        to={{
          pathname: props.pathname,
          prodname: props.product.name,
          desc: props.product.description,
          imgSrc: `/products/${props.product.image}`,
          price: props.product.price,
          // quantity: (props.cartItem && props.cartItem.quantity) || 0,
        }}
      >
        <h3>{props.name}</h3>
        <img
          height={100}
          title={props.product.name}
          src={`/products/${props.product.image}`}
          alt=""
        />
        <div className={styles.prod_name}>{props.product.name}</div>
        <div className={styles.prod_desc}>{props.product.description}</div>
        <div className={styles.prod_price}>{props.product.price} zl</div>
      </CustomLink>
    </div>
  );
}
