import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter'; // Import the filter component
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string; // Add category to the interface
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentFilter, setCurrentFilter] = useState<string>('todos'); // Add state for filter

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (category: string) => {
    setCurrentFilter(category);
  };

  // Filter products based on the current filter
  const filteredProducts = currentFilter === 'todos'
    ? products
    : products.filter(product => product.category === currentFilter);

  if (loading) {
    return <div className="text-center mt-5">Cargando productos...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5">Error: {error}</div>;
  }

  return (
    <div className="container product-list-container mt-5" id="products">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="section-title">NUESTROS CAFÉS</h2>
          <div className="title-divider"></div>
        </div>
      </div>
      {/* Add the filter component */}
      <ProductFilter onFilterChange={handleFilterChange} currentFilter={currentFilter} />
      <div className="row">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
