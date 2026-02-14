import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ProductCard.css';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const placeholderImage = `https://picsum.photos/seed/coffee-product-${product.id}/400/300`;
  const imageUrl = product.imageUrl && !product.imageUrl.startsWith('/') ? product.imageUrl : placeholderImage;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card product-card h-100">
        <Link to={`/products/${product.id}`} className="product-card-link">
          <img src={imageUrl} className="card-img-top" alt={product.name} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name.toUpperCase()}</h5>
            <p className="card-text flex-grow-1">{product.description}</p>
          </div>
        </Link>
        <div className="card-footer">
          <p className="card-price">${product.price.toFixed(2)}</p>
          <button className="btn btn-add-to-cart">AÑADIR</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
