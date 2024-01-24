import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, image, title, price, rating, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      id: id,
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>{price.toFixed(2).replace(".", ",")}</strong>
          <small>€</small>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <p className="checkoutProduct__stock">In stock</p>
        <p className="checkoutProduct__shipping">Eligible for FREE shipping</p>
        <div className="checkoutProduct__quantity">
          <span>
            <button onClick={decreaseQuantity}>-</button>
          </span>
          <span>
            <p>{quantity}</p>
          </span>
          <span>
            <button onClick={addToBasket}>+</button>
          </span>
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
