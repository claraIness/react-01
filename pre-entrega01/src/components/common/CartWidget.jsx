import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <span className="mr-2">10</span>
      <FaShoppingCart color="yellow" size={20} />
    </div>
  );
};
