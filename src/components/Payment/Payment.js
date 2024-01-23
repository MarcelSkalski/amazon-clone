import React from "react";
import "./Payment.css";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

function getBasketTotal(basket) {
  return basket?.reduce((acc, item) => acc + item.price, 0);
}

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.preventDefault();

    dispatch({
      type: "EMPTY_BASKET",
    });

    navigate("/");
  };

  const consolidatedBasket = basket.reduce((acc, item) => {
    const foundItem = acc.find((basketItem) => basketItem.id === item.id);
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="payment">
      <div className="payment__main">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>

          {/* Payment section - delivery address */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery address</h3>
            </div>
            <div className="payment__adress">
              <p>{user?.email}</p>
              <p>1234 Sample Street</p>
              <p>Exampleton, EX</p>
            </div>
          </div>
          {/* Payment section - review items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {/* Products */}
              {consolidatedBasket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
          {/* Payment section - payment method */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment method</h3>
            </div>
            <div className="payment__details">
              <h3>Card Details</h3>
              <form>
                <label>
                  <input
                    className="payment__input"
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number*"
                  />
                </label>
                <br />
                <div className="payment__input-row">
                  <label>
                    <input
                      className="payment__input"
                      type="text"
                      name="MM"
                      placeholder="MM*"
                    />
                  </label>
                  <label>
                    <input
                      className="payment__input"
                      type="text"
                      name="YY"
                      placeholder="YY*"
                    />
                  </label>
                  <label>
                    <input
                      className="payment__input"
                      type="text"
                      name="cvv"
                      placeholder="CVV/CVC*"
                    />
                  </label>
                </div>
                <label>
                  <input
                    className="payment__input"
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                  />
                </label>
                <br />
                <label>
                  <input
                    className="payment__input"
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                  />
                </label>
                <br />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order total: {value}</h3>
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
                  <button type="submit" onClick={handleBuyNow}>
                    Buy now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="payment__disclaimer ">
        <strong>Please Note:</strong> This is a demo site. The text fields for
        input of card details serve as placeholders only.{" "}
        <strong>Therefore, no payment will be processed.</strong> Clicking on
        "Buy now" will clear your shopping basket and redirect you to the home
        page.
      </p>
    </div>
  );
}

export default Payment;
