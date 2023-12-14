'use client';
import './page.css';
import React from 'react';
import { useRouter } from 'next/navigation';
import DataViewStore from '../components/DataViewStore/dataViewStore';

export default function MiTienda() {
  const router = useRouter();
  return (
    <div className='container-mitienda'>
      <div className='header-container-mitienda'>
			<h1 className='header-mitienda'>Visualizar información</h1>
            <p className='text-mitienda'>Administra tu cuenta</p>
      </div>
      <div className='data-container-mitienda'>
        <div className="container-img-mitienda">
            <img src="https://th.bing.com/th/id/R.3bed4c60f8464e0f9000b2d045fb7367?rik=f8xWKZv1qdM8oQ&pid=ImgRaw&r=0" alt="Logo Tienda" className="img-mitienda" />
        </div>
            <DataViewStore dataname='Nombre de la tienda' datainformation='Mercado de Frutas y Verduras' />
            <DataViewStore dataname='Nombre del encargado' datainformation='Fulanito Hernández' />
            <DataViewStore dataname='Correo electrónico' datainformation='fulanito@gmail.com'/>
            <DataViewStore dataname='Número de teléfono' datainformation='5593740284'/>
            <DataViewStore dataname='Descripción' datainformation='Frutas y verduras frescas'/>
      </div>
      <div className='button-main-container-mitienda'>
        <div className='button-container-mitienda'>
            <button className='button-mitienda' onClick={() => {router.push('/ModificarInfo');}}>Modificar información</button>
        </div>
        <div className='button-container-mitienda'>
            <button className='button-mitienda' onClick={() => {router.push('/Productos');}}>Productos</button>
        </div>
        <div className='button-container-mitienda'>
            <button className='button-mitienda' onClick={() => {router.push('/CobrarCupones');}}>Cobrar cupones</button>
        </div>
      </div>

    </div>
  );
}