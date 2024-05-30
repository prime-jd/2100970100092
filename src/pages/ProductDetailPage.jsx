import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1 0000`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.image || 'random_image.jpg'} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.company}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <p>{product.discount}</p>
      <p>{product.availability}</p>
    </div>
  );
};

export default ProductDetailPage;
