// Cart.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const increaseQuantity = (productId, size) => {
    setCart(cart.map(item => 
      item.id === productId && item.size === size 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    ));
  };

  const decreaseQuantity = (productId, size) => {
    setCart(cart.map(item => 
      item.id === productId && item.size === size 
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } 
        : item
    ));
  };

  const handleProceedToPay = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center space-x-4">
            <img src={item.image[0]} alt={item.name} className="w-16 h-16 object-cover" />
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <p className="text-gray-500">Size: {item.size}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 bg-gray-300 rounded" onClick={() => decreaseQuantity(item.id, item.size)}>-</button>
              <p>{item.quantity}</p>
              <button className="px-2 py-1 bg-gray-300 rounded" onClick={() => increaseQuantity(item.id, item.size)}>+</button>
            </div>
            <div>
              <p className="text-lg">${item.price * item.quantity}</p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 mb-2" onClick={() => addToCart(item)}>Add More</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500" onClick={handleProceedToPay}>Proceed to Pay</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
  