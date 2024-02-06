import React from 'react';
import { ProductCard } from '../common/ProductCard';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h4 className="mb-4">{greeting}</h4>
      <div className="row">
        <div className="col-md-4">
          <ProductCard titulo={"Nike"} desc={"Son las mejores"} precio={120} />
        </div>
        <div className="col-md-4">
          <ProductCard titulo={"Adidas"} desc={"Son las casi mejores"} precio={130} />
        </div>
        <div className="col-md-4">
          <ProductCard titulo={"Pumas"} desc={"Son las más o menos mejores"} precio={140} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;


