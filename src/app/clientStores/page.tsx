'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import StoreView from '../components/StoreView/StoreView';

export default function ClientStores() {
  const router = useRouter();
  return (
    <div className='main-container-cstores'>
      <div className='header-container-cstores'>
				<div className='div-H1-cstores'><h1 className='H1-cstores'>TIENDAS Y PRODUCTOS</h1></div>
      </div>

			<div className='content-cstores'>
        <button className='ddbutton-cstores' onClick={() => {router.push('/clientProducts');}}>
          <StoreView 
            dataimage='https://live.staticflickr.com/4487/37370421782_dc835e4f3b_z.jpg'
            dataname='Verduleria Peñaflor'
          />
        </button>
        <button className='ddbutton-cstores' onClick={() => {router.push('/clientProducts');}}>
          <StoreView 
            dataimage='https://live.staticflickr.com/4487/37370421782_dc835e4f3b_z.jpg'
            dataname='Verduleria Peñaflor'
          />
        </button>
        <button className='ddbutton-cstores' onClick={() => {router.push('/clientProducts');}}>
          <StoreView 
            dataimage='https://live.staticflickr.com/4487/37370421782_dc835e4f3b_z.jpg'
            dataname='Verduleria Peñaflor'
          />
        </button>
        <button className='ddbutton-cstores' onClick={() => {router.push('/clientProducts');}}>
          <StoreView 
            dataimage='https://live.staticflickr.com/4487/37370421782_dc835e4f3b_z.jpg'
            dataname='Verduleria Peñaflor'
          />
        </button>
			</div>
        
    </div>
  );
}