import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleConfirmOrder = () => {
    // Logic to handle order confirmation goes here
    alert('Order confirmed!'); // Placeholder action
    navigate('/'); // Navigate back to home after confirming order
  };

  if (cart.length === 0) {
    return <p>Your cart is empty. Please add items to your cart before checking out.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="border rounded p-4 mb-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between py-2 border-b">
            <div>
              <p>{item.name} (Size: {item.size})</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div>
              <p>${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-2">
          <p>Total Price:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Confirm Order Button */}
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        onClick={handleConfirmOrder}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
