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
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbMoodSad } from "react-icons/tb";
import axios from 'axios';


export default function ClientProducts() {
  const [productsJson, setProducts] = useState<any>(null);
  const [storeJson, setStore] = useState<any>(null);
  const searchParams = useSearchParams();
  const [load,setLoad] = useState(true);
  const id = parseInt(searchParams?.get('id')!);
  const [plength,setLength] = useState(0);
  
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
        console.log("ESTE ES EL ARRAY DE PRODUCTOS",response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

    useEffect(() => {
      // Establecer la longitud de todos los productos de la tienda
      if (productsJson && productsJson.products) {
        setLength(productsJson.products.length);
        console.log("ESTE ES EL PLENGTH", plength);
        setLoad(false);
      }
    }, [productsJson]);

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
        {load ? (
          <div className='notFound'>
            <FaMagnifyingGlass />
            <h1>Buscando.....</h1>
          </div>
        ) : (
          <div>
            {plength === 0 ? (
              <div className='notFound'>
                <TbMoodSad />
                <h1>¡Oh no! Lo sentimos, no encontramos ningún resultado ¿Intenta quitar algunos filtros?</h1>
              </div>
            ) : (
              <div className='productos'>
                {productsJson && productsJson.products.map((product: any) => {
                  //const productImages = product.product_images.map((image: any) => {
                  //  return image.image_url;
                  //});
                  return (
                    <ProductClientV
                      id={product.id}
                      dataimages={product.thumbnail_url}
                      dataname={product.name}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
			</div>
        
    </div>
  );
}