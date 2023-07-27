import React from 'react';

const ProductCard = ({ product, index, incrementQuantity, decrementQuantity }) => {
  const calculateTotalPrice = (quantity, price) => {
    const totalPrice = quantity * price;
    return totalPrice.toFixed(2);
  };

  const updateTotalPrice = (elementId, totalPrice) => {
    document.getElementById(elementId).textContent = `$${totalPrice}`;
  };

  const handleIncrement = () => {
    incrementQuantity(index);
  };

  const handleDecrement = () => {
    decrementQuantity(index);
  };

  const handleQuantityChange = (event) => {
    const updatedQuantity = parseInt(event.target.value);
    const totalPrice = calculateTotalPrice(updatedQuantity, product.price);
    updateTotalPrice(`totalPrice${index + 1}`, totalPrice);
  };

  const initialTotalPrice = calculateTotalPrice(1, product.price);

  const getRandomImageUrl = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    return `https://source.unsplash.com/random/600x400/?car&${randomNumber}`;
  };

  return (
    <div className="col-md-4 py-3">
      <div className="card borderNeutral shadow">
        <div className="card-img">
          <img src={getRandomImageUrl()} className="card-img-top img-fluid" alt={`Image ${index + 1}`} />
        </div>
        <div className="card-body">
          <h4 className="card-title text_primary">{product.name}</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="row justify-content-end align-items-center">
            <div className="d-flex justify-content-end">
              <h5 className="py-1 text_neutral" id={`totalPrice${index + 1}`}>{initialTotalPrice}</h5>
            </div>
          </div>

          <div className="row justify-content-end align-items-center">
            <div className="col-1 d-flex justify-content-end">
              <span className="material-symbols-outlined text-danger">delete</span>
            </div>
            <div className="col-6 col-md-4 d-flex justify-content-end">
              <button className="btn accent px-2" onClick={handleDecrement}>-</button>
              <input
                id={`form${index + 1}`}
                min="0"
                name="quantity"
                value="1"
                type="number"
                className="form-control form-control-sm w-100"
                onChange={handleQuantityChange}
              />
              <button className="btn accent px-2" onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
