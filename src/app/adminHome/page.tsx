'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import iconAdmin from '../images/iconAdmin.png';
import { useRouter } from 'next/navigation';

export default function AdminHome() {
  const router = useRouter();
  return (
    <div className='main-Container'>
      <div className='message-container'>
        <img className='iconAdmin' src={iconAdmin.src} alt="Descripción de la imagen" />
        <p className='main-Text'>
          ¡Hola! Bienvenido al perfil del administrador
          <br />
          Aquí podrás administrar los eventos y los cupones de los clientes.
        </p>
      </div>
      <div className='buttons-container'><button className='ddbutton' onClick={() => {router.push('/adminEvents');}}>Eventos</button></div>
    </div>

  );
}
