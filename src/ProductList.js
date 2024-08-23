import React from 'react';
import './cart.css';
import './productlist.css'
const products = [ 
  { id: 1, name: 'Apple ',price: 10 },
   { id: 2, name: 'Orange', price: 20 },
  { id: 3, name: 'Banana', price: 30 },
  { id: 4, name: '5 Star', price: 30 },
  { id: 4, name: '7up', price: 30 }
];


const ProductList = ({ addToCart }) => {
  return (
    <div className='ww'>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button className='eee' onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
