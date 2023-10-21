import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '/img/hero.jpg'
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

const Inicio = () => {

  const steps = [
    {
      element: '#logo',
      intro: 'Bienvenidos a nuestro sistema de productos. En este sistema podrás agregar, editar, eliminar y mostrar tus productos.',
    },
    {
      element: '#inicio',
      intro: 'Aquí estás. Este enlace te lleva al inicio de la página',
    },
    {
      element: '#inventario',
      intro: 'Este enlace te llevará al inventario del producto, donde podrás editar, mostrar y eliminar tus productos.',
    },
    {
      element: '#productos',
      intro: 'Este enlace te llevará al formulario de productos, donde podrás agregar los nuevos productos a tu inventario',
    }, 
    {
      element: '#inicioInventario',
      intro: 'Gracias por su atención, feliz navegación',
    }, 
  ];
  const onExit = () => {};
  

  return (
<>
<Steps enabled={true} steps={steps} initialStep={0} onExit={onExit} />
<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={Hero} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" id='title'>Bienvenidos a tu App de inventario</h1>
        <p class="lead">
          Nuestra aplicación te proporciona una solución completa y sencilla, con navegación intuitiva y acceso rápido a todas las funciones esenciales. Agrega productos fácilmente, lleva un registro de tu inventario y realiza ediciones o eliminaciones de manera sencilla.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to="/inventario" id='inicioInventario' type="button" class="btn btn-primary btn-lg px-4 me-md-2">Ir a inventario</Link>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Inicio