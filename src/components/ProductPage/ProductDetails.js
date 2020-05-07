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
          <form>
            <label for="quantityProd">Dodaj ilosc</label>
            <input
              value={this.props.location.quantity}
              name="quantityProd"
              pattern="[0-9]{3}"
            />
          </form>
        </h2>
        <img
          height={100}
          title={this.props.location.prodname}
          src={this.props.location.imgSrc}
          alt=""
        />
        <div>{this.props.location.desc}</div>
        <div>
          <Link to="/Produkty">Wróć do listy produktów</Link>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
