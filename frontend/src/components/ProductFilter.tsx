import React from 'react';
import './ProductFilter.css';

interface ProductFilterProps {
  onFilterChange: (category: string) => void;
  currentFilter: string;
}

const categories = ['todos', 'soluble', 'grano', 'molido', 'regiones'];

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, currentFilter }) => {
  return (
    <div className="filter-container text-center mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`btn filter-btn ${currentFilter === category ? 'active' : ''}`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
