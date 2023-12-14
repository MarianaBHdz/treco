'use client'
import './ProductClientV.css';
import React, { PropsWithoutRef } from 'react';
import {useState, useEffect} from 'react';

interface ProductClientV{
  dataimages: string;
  dataname: string;
}

function ProductClientV (props:ProductClientV){
  return(
    <div className='main-container-product'>
      <div className='image-container-product'>
        <img className = "image-product"src={props.dataimages} />
      </div>
      <div className='name-container-product'>
        <p className='name-product'>{props.dataname}</p>
      </div>
    </div>
  );
}

export default ProductClientV;