'use client'
import './ProductClientV.css';
import React, { PropsWithoutRef } from 'react';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react';

interface ProductClientV{
  id: number;
  dataimages: string;
  dataname: string;
}

function ProductClientV (props:ProductClientV){
  /*const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter()
    const prevImage = () =>{
        setCurrentIndex((prevIndex)=>(prevIndex-1+props.dataimages.length)%props.dataimages.length);
    }
    const nextImage = () =>{
        setCurrentIndex((prevIndex)=>(prevIndex+1)%props.dataimages.length);
  }*/
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