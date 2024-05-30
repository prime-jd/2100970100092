import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: ''
  });
  const [sort, setSort] = useState('price');

  useEffect(() => {
    axios.get('/test/companies/:companyname/categories/categoryname/products?top=n&minPri ce=p&maxPrice=q')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    // Implement filtering logic
  }).sort((a, b) => {
    // Implement sorting logic
  });

  return (
    <div>
      <div>
        <select name="category" onChange={handleFilterChange}>
          {/* Options */}
        </select>
        <select name="company" onChange={handleFilterChange}>
          {/* Options */}
        </select>
        <select name="rating" onChange={handleFilterChange}>
          {/* Options */}
        </select>
        <select name="priceRange" onChange={handleFilterChange}>
          {/* Options */}
        </select>
        <select name="availability" onChange={handleFilterChange}>
          {/* Options */}
        </select>
        <select value={sort} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="discount">Discount</option>
        </select>
      </div>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <img src={product.image || 'random_image.jpg'} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.company}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            {/* Link to Product Detail Page */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
