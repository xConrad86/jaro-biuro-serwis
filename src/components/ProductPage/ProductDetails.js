import React from "react";
import { Link } from "react-router-dom";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h2>
          {this.props.location.prodname}
          <tr>{this.props.location.price} zl</tr>
        </h2>
        <img
          height={100}
          title={this.props.location.prodname}
          src={this.props.location.imgSrc}
          alt=""
        />
        <div>{this.props.location.desc}</div>
        <div>
          <Link to="/catalogue">Wróć do listy produktów</Link>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
