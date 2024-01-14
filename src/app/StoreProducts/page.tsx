'use client';

import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import SinProductos from '../images/AñadirProducto.png';
import ProductStore from '../components/ProductStore/ProductStore';
import axios from 'axios';
import { useSession } from '../components/context/SessionContext';
import RWDModal from '../components/ModalPopup/RWDModal';
import FormCreateProduct from '../components/FormCreateProduct/FormCreateProduct';

export default function StoreProducts() {
    const {sessionId} = useSession();
    const [store, setStore] = useState<any>({});
    const [storeid, setStoreID] = useState<string | null>(null);
    const [productsJson, setProducts] = useState<any>(null);
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

    useEffect(() => {
        axios.get('http://localhost:3000/api/User/store?user_id='+sessionId)
        .then((response)=>{
            setStore(response.data.user_store);
            const storeIdValue = response.data.user_store.id;
            setStoreID(storeIdValue);
            console.log(storeIdValue);
        })
        .catch((error) =>{
            console.log(error);
        })
    },[]);

    useEffect(()=>{
        if (storeid !== null && storeid !== undefined) {
            axios.get('http://localhost:3000/api/Products/productStore?id='+storeid)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },[storeid]);



    const router = useRouter();
    return (
      <div className="main-container-storeproducts">
        <div className='header-container-storeproducts'>
			<h1 className='header-storeproducts'>Visualizar productos</h1>
            <p className='text-storeproducts'>Visualiza y modifica la información de tus productos</p>
        </div>
        {productsJson ? (
        productsJson.products.length === 0 ? (
            <div className="container-sinproductos-storeproducts">
                <div className="container-div-sinproductos-storeproducts">
                <img src={SinProductos.src} alt="Añadir Producto" className="img-sinproductos-storeproducts" />
                </div>
                <div className="container-div-sinproductos-storeproducts">
                    <h1 className="h1-sinproductos-storeproducts">Todavía no hay productos en la tienda ¿Por qué no creamos uno juntos?</h1>
                </div>
                <div className="container-div-sinproductos-storeproducts">
                    <button className="button-sinproductos-storeproducts" onClick={toggleModal}>Agregar producto</button>
                </div>
            </div>
        ) : (
            <>
            <div className='content-productos-storeproducts'>
                {productsJson.products.map((product:any, index:number) => (
                        <ProductStore
                            key={index}
                            numproduct={product.id}
                            dataimages={product.thumbnail_url}
                            dataname={product.name}
                        />
                ))}
            </div>
            <div className="container-div-sinproductos-storeproducts">
                <button className="button-sinproductos-storeproducts" onClick={toggleModal}>Agregar producto</button>
            </div>
            <RWDModal header="Agregar Producto"onBackdropClick={toggleModal} isModalVisible={isModalVisible} message="* Campos obligatorios" content={<FormCreateProduct storeId={storeid} productoS={{ name: '', thumbnail_url: '' }}  onAccept={toggleModal}/>}/>
            <div id = "modal-root"></div>
            </>
        )
        ) : (
        <p>Cargando datos...</p>
        )}
      </div>
          
    )
}