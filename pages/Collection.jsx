import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import FilterSidebar from '../components/FilterSidebar';

const Collection = () => {
  const { products, search } = useContext(ShopContext); // Get products and search term from ShopContext
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: '',
    gender: '',
    priceRange: [0, 1000],
  });

  // Apply filters when any filter state or search term changes
  useEffect(() => {
    const { category, priceRange, gender } = filters;
    
    const filtered = products.filter(product => {
      const matchesCategory = category ? product.category === category : true;
      const matchesGender = gender ? product.gender === gender : true;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = search ? product.name.toLowerCase().includes(search.toLowerCase()) : true; // Search filter
      return matchesCategory && matchesGender && matchesPrice && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [filters, products, search]); // Trigger effect when filters, products, or search changes

  // Update the filters when sidebar changes
  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="flex">
      {/* Left Sidebar for filters */}
      <FilterSidebar onFilterChange={handleFilterChange} />
      
      {/* Product grid on the right */}
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem 
              key={product.id} // Ensure unique key here
              id={product.id} 
              name={product.name} 
              image={product.image} 
              price={product.price} 
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
