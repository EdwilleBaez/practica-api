import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7051/ProductAll')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='container'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            Nombre: {product.name}, Precio: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
