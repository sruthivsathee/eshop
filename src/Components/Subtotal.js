import React from "react";
import "./Subtotal.css";
import CurrencyInput from "react-currency-input-field";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>
          $
          <CurrencyInput
            value={getBasketTotal(basket)}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix="$"
            decimalSeparator="."
            groupSeparator=","
            disabled
          />
        </strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button className="subtotal_button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
