import React from "react";

const CartItem = () => {
  return (
    <tr className="cart-item">
      <td></td>
      <td class="cart-image">
        <img src="img/products/product1/1.png" alt="" />
        <i className="bi bi-x delete-cart"></i>
      </td>
      <td>Analogue Resin Strap</td>
      <td>$108.00</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$108.00</td>
    </tr>
  );
};

export default CartItem;
