'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';


export default function AdminEvents() {
  const router = useRouter();
  return (
    <div className='main-container-acoupons'>
      <div className='header-container-acoupons'>
        <h1 className='H1-acoupons'>ADMINISTRAR CUPONES</h1>
      </div>
      <div className='buttons-container-acoupons'>
        <button className='ddbutton-acoupons' onClick={() => {router.push('/adminEvents');}}>OTORGAR CUPONES</button>
        <br/> 
        <button className='ddbutton-acoupons' onClick={() => {router.push('/adminCoupons');}}>COBRAR CUPONES</button>
      </div>
    </div>
  );
}