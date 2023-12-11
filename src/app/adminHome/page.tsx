import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import iconAdmin from '../images/iconAdmin.png';

export default function ViewProfile() {
  return (
    <div className='main-Container'>
      <img className='iconAdmin' src={iconAdmin.src} alt="Descripción de la imagen" />
      <p className='main-Text'>
        ¡Hola! Bienvenido al perfil del administrador
        <br />
        Aquí podrás administrar los eventos y los cupones de los clientes.
      </p>
    </div>
  );
}
