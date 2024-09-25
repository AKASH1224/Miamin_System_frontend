import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState('');

  // Fetch product based on ID
  useEffect(() => {
    const foundProduct = products.find(prod => prod.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image[0]);
    }
  }, [id, products]);

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Handle image selection
  const handleImageSelect = (image) => {
    setMainImage(image);
  };

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (product && selectedSize) {
      addToCart(product, selectedSize); // Add to cart
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Thumbnails */}
        <div className="w-full md:w-1/4 flex flex-col space-y-2 items-center">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} ${index + 1}`}
              onClick={() => handleImageSelect(img)}
              className={`cursor-pointer border ${
                mainImage === img ? 'border-blue-500' : 'border-gray-200'
              }`}
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="max-w-full h-auto object-cover"
            src={mainImage}
            alt={product.name}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/4 px-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
            <div className="flex space-x-2">
              {["M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  } hover:bg-blue-500 hover:text-white`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            disabled={!selectedSize}
            onClick={handleAddToCart}
          >
            {selectedSize ? `Add to Cart (${selectedSize})` : 'Select a Size'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
