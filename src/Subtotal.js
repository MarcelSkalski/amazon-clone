import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function getBasketTotal(basket) {
  return basket?.reduce((acc, item) => acc + item.price, 0);
}

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        fixedDecimalScale={true}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={"."}
        decimalSeparator={","}
        suffix={"€"}
      />

      <button
        onClick={(e) => (user ? navigate("/payment") : navigate("/login"))}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
