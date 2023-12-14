'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import ImageView from '../components/ImageView/ImageView';
import DataViewS from '../components/DataViewS/DataViewS';
import DataView from '../components/DataView/DataView';
import ProductClientV from '../components/ProductClientV/ProductClientV';

export default function ClientStores() {
  const router = useRouter();
  return (
    <div className='main-container-cproducts'>
      <div className='store-container-cproducts'>
				<div className='image-container-store'><ImageView dataimage='https://live.staticflickr.com/4487/37370421782_dc835e4f3b_z.jpg'/></div>
        <div className='infostore-container-cproducts'>
          <DataViewS num={2} data='Verduleria Peñaflor'/>
          <br/>
          <DataView datanum={2} dataname='Encargado' datainformation='Albertino Castillo'/>
          <br/>
          <DataView datanum={2} dataname='Descripción' datainformation='Somos una tienda que vende frutas y verduras cultivadas por manos mexicanas'/>
        </div>
      </div>

			<div className='content-cproducts'>
        <ProductClientV dataimages='https://www.eluniversal.com.mx/resizer/5kl1QZyQz0jtnP4dkVOr6VT2m9s=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/XDWXI53B5ZDMBOSX3KMZLBRS6A.jpg' dataname='Jitomates'/>
			</div>
        
    </div>
  );
}