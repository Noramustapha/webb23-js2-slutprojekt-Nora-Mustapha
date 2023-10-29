import React, { useState } from 'react';
import './Product.css';
import products from '../Products/Products'; // Importera produkterna

function Product({ productId }) {
  const product = products.find((p) => p.id === productId);



 const [quantity, setQuantity] = useState(1);
 
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    if (quantity > 0 && quantity <= product.stock) {
      console.log(`Adding ${quantity} of ${product.name} to the cart.`);
    }
  };

  // Hitta rätt produkt i 'products' baserat på 'product.id'
  const productInProducts = products.find((p) => p.id === product.id);

  return (
    <div className="product">
      <img src={productInProducts.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="quantity-section">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <p className="stock-info">{product.stock} in stock</p>
        </div>
        <button
          className="add-to-cart-button"
          onClick={addToCart}
          disabled={quantity === 0 || quantity > product.stock}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
