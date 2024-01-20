import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

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
    <div className="checkout">
      <div className="checkout__main">
        <div className="checkout__left">
          <div>
            <h3>Hello {user?.displayName}</h3>
            <div className="checkout__titleContainer">
              <h2 className="checkout__title">Your Shopping Basket</h2>
              <p className="checkout__price">Price</p>
            </div>

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

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <p className="checkout__disclaimer ">
        The price and availability of items at Amazon.de are subject to change.
        The shopping basket is a temporary place to store a list of your items
        and reflects each item's most recent price.
      </p>
      <p className="checkout__disclaimer ">
        Do you have a gift card or promotional code? We'll ask you to enter your
        claim code when it's time to pay.
      </p>
    </div>
  );
}

export default Checkout;
