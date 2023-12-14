'use client';
import './page.css';
import React from 'react';
import { useRouter } from 'next/navigation';
import Mitiendaimg from '../images/Tiendaimg.png';

export default function MiTiendaInicio() {
  const router = useRouter();
  return (
    <div className='main-container-mitiendainicio'>
        <div className="container-mitiendainicio">
            <img src={Mitiendaimg.src} alt="Tienda logo" className="img-mitiendainicio" />
        </div>
        <div className="container-mitiendainicio">
            <h1 className="h1-mitiendainicio">¡Únete a TRECO! Sube tu tienda al reciclaje local</h1>
        </div>
        <div className="container-mitiendainicio">
            <h2 className="h2-mitiendainicio">¡Saludos comerciantes locales!</h2>
        </div>
        <div className="container-text-mitiendainicio">
            <p className="p-mitiendainicio">TRECO es una plataforma dedicada al reciclaje y la sostenibilidad, y queremos que tú formes parte de nuestra familia</p>
        </div>
        <div className="container-button-mitiendainicio">
        <button className='button-mitiendainicio' onClick={() => {router.push('/CrearTienda');}}>Crear Tienda</button>
        </div>
    </div>
  );
}