'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import DataView from '../components/DataView/DataView';

export default function ClientInformation() {
  const router = useRouter();
  return (
    <div className='main-container-cinformation'>
      <div className='header-container-cinformation'>
				<h1 className='H1-ccoupons'>MI PERFIL</h1>
        <p className='description-Profile'>Administra tu cuenta</p>
      </div>
      <div className='information-container-cinformation'>
        <DataView dataname='Nombre y apellido' datainformation='Fulanito Hernández' />
        <DataView dataname='Correo electrónico' datainformation='fulanito@gmail.com' />
        <DataView dataname='Fecha de nacimiento' datainformation='02/04/1990'/>
        <DataView dataname='CURP' datainformation='JSOV900402HLDHCOS4'/>
      </div>
      <div className='buttons-container-cinformation'>
        <button className='ddbutton-cinformation' onClick={() => {router.push('/adminEvents');}}>MODIFICAR</button>
      </div>

    </div>
  );
}