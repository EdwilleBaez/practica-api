import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarSerch from './NavbarSerch';

const ProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://localhost:7051/ProductAll');
        setAllProduct(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  //Funcion de eliminar
  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`https://localhost:7051/ProductId?id=${productId}`);
      setAllProduct((prevProducts) => prevProducts.filter((product) => product.id !== productId));
      alert('Producto eliminado');
    } catch (error) {
      console.log(error);
      alert('Error al eliminar el producto');
    }
  };
  //Funciones de editar
  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  const handleSaveEdit = async () => {
    if (editingProduct) {
      try {
        await axios.put(`https://localhost:7051/Product?id=${editingProduct.id}`, editingProduct);
        setAllProduct((prevProducts) =>
          prevProducts.map((p) => (p.id === editingProduct.id ? editingProduct : p))
        );
        alert('Producto editado');
        setEditingProduct(null);
      } catch (error) {
        console.log(error);
        alert('Error al editar el producto');
      }
    }
  };

  //Funcion de obtener producto por id
  const handleGetById = async (productId) => {
    try {
      const response = await axios.get(`https://localhost:7051/ProductId?id=${productId}`);

      setProduct(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Función para filtrar productos
  const filteredProducts = allProduct.filter((product) => {
    const search = searchTerm.toLowerCase();
    return product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search);
  });


  return (
    <>
      <NavbarSerch onSearch={setSearchTerm} />
      <div className="container mt-4">
        <h2>Lista de Productos</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className='align-middle'>{product.id}</td>
                <td className='align-middle'>
                  {editingProduct && editingProduct.id === product.id ? (
                    <input
                      className="form-control"
                      type="text"
                      value={editingProduct.name}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, name: e.target.value })
                      }
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td className='align-middle'>
                  {editingProduct && editingProduct.id === product.id ? (
                    <input
                      className="form-control"
                      type="text"
                      value={editingProduct.description}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, description: e.target.value })
                      }
                    />
                  ) : (
                    product.description
                  )}
                </td>
                <td className='align-middle'>
                  {editingProduct && editingProduct.id === product.id ? (
                    <input
                      className="form-control"
                      type="text"
                      value={editingProduct.category}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, category: e.target.value })
                      }
                    />
                  ) : (
                    product.category
                  )}
                </td>
                <td className='align-middle' >
                  {editingProduct && editingProduct.id === product.id ? (
                    <input
                      className="form-control"
                      type="number"
                      value={editingProduct.stock}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, stock: parseInt(e.target.value) })
                      }
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td className='align-middle'>
                  {editingProduct && editingProduct.id === product.id ? (
                    <input
                      className="form-control"
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })
                      }
                    />
                  ) : (
                    `$${product.price.toFixed(2)}`
                  )}
                </td>
                <td>
                  {editingProduct && editingProduct.id === product.id ? (
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={handleSaveEdit}
                    >
                      Guardar
                    </button>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Acciones
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleGetById(product.id)}>
                            Ver detalle
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" onClick={() => handleEditClick(product)}>
                            Editar
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item text-danger" onClick={() => handleDeleteClick(product.id)}>
                            Eliminar
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Detalle del producto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Nombre: {Product.name}</p>
                <p>Descripcion: {Product.description}</p>
                <p>Categoria: {Product.category}</p>
                <p> Precio: {Product.price}</p>
                <p>Stock: {Product.stock}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;