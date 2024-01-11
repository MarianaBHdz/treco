'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import ImageView from '../components/ImageView/ImageView';
import DataViewS from '../components/DataViewS/DataViewS';
import DataView from '../components/DataView/DataView';
import ProductClientV from '../components/ProductClientV/ProductClientV';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';


export default function ClientProducts() {
  const [productsJson, setProducts] = useState<any>(null);
  const [storeJson, setStore] = useState<any>(null);
  const searchParams = useSearchParams();
  const [load,setLoad] = useState(true);
  const id = parseInt(searchParams?.get('id')!);
  const [plength,setLength] = useState(0);
  console.log('ESTE ES',storeJson);
  
  useEffect(() => {
    axios.get('http://localhost:3000/api/Stores?id='+id)
    .then((response) => {
      console.log(response.data);
      setStore(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    axios.get('http://localhost:3000/api/Products/productStore?id='+id)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  const router = useRouter();
  return (
    <div className='main-container-cproducts'>
      <div className='store-container-cproducts'>
        {storeJson ? (
          <>
          <div className='image-container-store'><ImageView dataimage={storeJson.storeDetails.avatar_url}/></div>
          <div className='infostore-container-cproducts'>
            <DataViewS num={2} data={storeJson.storeDetails.business_name}/>
            <br/>
            <DataView datanum={2} dataname='Encargado' datainformation={storeJson.storeDetails.name_store_manager}/>
            <br/>
            <DataView datanum={2} dataname='Descripción' datainformation={storeJson.storeDetails.description}/>
          </div>
          </>
         ) : (
          <p>Cargando datos...</p>
        )}
      </div>

			<div className='content-cproducts'>
        <ProductClientV dataimages='https://www.eluniversal.com.mx/resizer/5kl1QZyQz0jtnP4dkVOr6VT2m9s=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/XDWXI53B5ZDMBOSX3KMZLBRS6A.jpg' dataname='Jitomates'/>
			</div>
        
    </div>
  );
}