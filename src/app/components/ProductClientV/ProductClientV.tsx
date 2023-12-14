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
    <div className='main-container-imageview'>
      <div className='image-container-imageview'>
        <img className = "image-imageview"src={props.dataimages} />
      </div>
      <div className='name-container-imageview'>
        <p className='name-imageview'>{props.dataname}</p>
      </div>
    </div>
  );
}

export default ProductClientV;