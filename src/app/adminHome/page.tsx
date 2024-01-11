'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import iconAdmin from '../images/iconAdmin.png';
import { useRouter } from 'next/navigation';

export default function AdminHome() {
  const router = useRouter();
  return (
    <div className='main-container-ahome'>
        <div className='img-p-ahome'>
          <img className='iconAdmin' src={iconAdmin.src} alt="Icono de Administrador" />
        </div>
        <div className='img-p-ahome'>
          <p className='main-text-ahome'>
          ¡Hola! Bienvenido al perfil del administrador
          <br /> 
          Aquí podrás administrar los eventos y los cupones de los clientes.
          </p>
        </div>
        <div className='buttons-container-ahome'>
          <button className='ddbutton-ahome' onClick={() => {router.push('/adminEvents');}}>EVENTOS</button>
          <button className='ddbutton-ahome' onClick={() => {router.push('/adminCoupons');}}>CUPONES</button>
        </div>
    </div>
  );
}
