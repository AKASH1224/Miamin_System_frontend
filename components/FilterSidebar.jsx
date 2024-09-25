import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [gender, setGender] = useState('');

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory(''); // Reset subcategory when category changes
    onFilterChange({ category: selectedCategory, subcategory: '', priceRange, gender });
  };

  const handleSubcategoryChange = (e) => {
    const selectedSubcategory = e.target.value;
    setSubcategory(selectedSubcategory);
    onFilterChange({ category, subcategory: selectedSubcategory, priceRange, gender });
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
    onFilterChange({ category, subcategory, priceRange: [0, value], gender });
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    onFilterChange({ category, subcategory, priceRange, gender: e.target.value });
  };

  // Render subcategories based on the selected category
  const renderSubcategories = () => {
    if (category === 'clothing') {
      return (
        <div className="mb-4">
          <label className="block mb-2 font-medium">Subcategory</label>
          <select value={subcategory} onChange={handleSubcategoryChange} className="border p-2 w-full">
            <option value="">All Subcategories</option>
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>
      );
    }
    return null; // Don't render subcategories if category is not "clothing"
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="font-bold mb-4">Filter</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Category</label>
        <select value={category} onChange={handleCategoryChange} className="border p-2 w-full">
          <option value="">All Categories</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      {/* Subcategory Filter */}
      {renderSubcategories()}

      {/* Gender Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Gender</label>
        <select value={gender} onChange={handleGenderChange} className="border p-2 w-full">
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Kid">Kids</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Price Range</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <p className="mt-2">Up to ${priceRange[1]}</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
