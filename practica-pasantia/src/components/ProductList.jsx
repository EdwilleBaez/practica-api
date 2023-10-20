import React, { useState } from 'react';

function ProductList({ products }) {
  const [productList, setProductList] = useState(products);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDeleteClick = (productId) => {
    const updatedProductList = productList.filter((product) => product.id !== productId);
    setProductList(updatedProductList);
  };

  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  const handleSaveEdit = () => {
    const index = productList.findIndex((product) => product.id === editingProduct.id);

    if (index !== -1) {
      const updatedProductList = [...productList];
      updatedProductList[index] = { ...editingProduct };
      setProductList(updatedProductList);
      setEditingProduct(null);
    }
  };

  return (
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
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <input
                    className='form-control'
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
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <input
                    className='form-control'
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
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <input
                    className='form-control'
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
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <input
                    className='form-control'
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
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <input
                    className='form-control'
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
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Acciones
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => handleEditClick(product)}
                        >
                          Editar
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => handleDeleteClick(product.id)}
                        >
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
    </div>
  );
}

export default ProductList;
