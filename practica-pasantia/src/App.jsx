import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';

function App() {
  const [products, setProducts] = useState([]);
  const [lastId, setLastId] = useState(0);

  // Función para agregar un nuevo producto a la lista
  const addProduct = (newProduct) => {
    const newId = lastId + 1;
    newProduct.id = newId;
    setLastId(newId);
    setProducts([...products, newProduct]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductForm onProductAdd={addProduct} />} />
          <Route path="/inventario" element={<ProductList products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
