import React from 'react';
import { Link } from 'react-router-dom';


const NavbarSerch = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-between">
        <i class="bi bi-search"></i>

            <div className="col-3">
                <Link to="/productos" class="btn btn-primary mb-4" role="button">Agregar producto</Link>
            </div>
            <div className="col-4">
                <form>
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </span>
                        <input 
                            className="form-control"
                            type="search"
                            placeholder="Filtrar por nombre o categoría"
                            aria-label="Search"
                            onChange={handleSearch}
                            class="form-control" 
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSerch;
