import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyFavoriteColorComponent from './ColorIntro/firstComponent';
import Hero from './Hero/Hero';
import ProductCard from './ProductCard/ProductCard';

const products = [
  { name: 'Product 1', price: 44.00 },
  { name: 'Product 2', price: 39.00 },
  { name: 'Product 3', price: 84.00 }
];

ReactDOM.render(
  <React.StrictMode>
    <MyFavoriteColorComponent />
    <div className='container no-gutters p-0 my-5'>
      <h1>Preview:</h1>
    </div>
    <div className='container-app shadow rounded no-gutters p-0 my-5'>
      <Hero />
      <div className='row d-flex justify-content-center p-3'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      </div>
      
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
