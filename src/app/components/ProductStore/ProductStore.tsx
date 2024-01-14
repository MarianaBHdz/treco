'use client'
import './ProductStore.css';
import React, { PropsWithoutRef } from 'react';
import {useState, useEffect} from 'react';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import DeleteConfirmation from '../confirmations/DeleteConfirmation';
import { Success } from '../confirmations/Success';
import RWDModal from '../ModalPopup/RWDModal';
import Formproduct from '../formularioProducto/Formproducto';
import axios from "axios";

interface ProductStore{
    numproduct: number;
    dataimages: string;
    dataname: string;
}

function ProductStore (props:ProductStore){
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = React.useState(false);
    const handleCancel = () => {
        setIsDeleteConfirmationOpen(true);
    };

    const [isModalVisible, setIsModalVisible] = useState(false)
    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);

    const handleDeleteProducto = async (idproduct:any) => {
        try {
          const response =await axios.delete('/api/DeleteProduct?id='+idproduct)//Editar api
          console.log(response);
          setIsSuccessModalOpen(true);
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <div className='main-container-productstore'>
            <div className='image-container-productstore'>
                <img className = "image-productstore"src={props.dataimages} />
            </div>
            <div className='name-container-productstore'>
                <p className='name-productstore'>{props.dataname}</p>
            </div>
            <div className="actions-container-productstore">
                <div className="container-icons-productstore">
                    <BsFillPencilFill className='edit-productstore' onClick={toggleModal}/>
                </div>
                <div className="container-icons-productstore">
                    <BsFillTrashFill className='delete-productstore' onClick={()=>
                          {handleCancel()
                          setSelectedProduct(props.numproduct);}}/>
                </div>
            </div>
            <RWDModal header="Modificar Producto"onBackdropClick={toggleModal} isModalVisible={isModalVisible} message="* Campos obligatorios" content={<Formproduct id={props.numproduct} productoS={{ name: props.dataname, thumbnail_url: props.dataimages }} onAccept={toggleModal}/>}/>
            <div id = "modal-root"></div>

            {isDeleteConfirmationOpen && (
                <DeleteConfirmation
                onClose={() => setIsDeleteConfirmationOpen(false)}
                onAccept={() => {
                    handleDeleteProducto(selectedProduct)
                    setIsDeleteConfirmationOpen(false);
                }}
            />)}
            {isSuccessModalOpen && <Success onClose={() => {setIsSuccessModalOpen(false); window.location.reload()}} successProps={{ message: 'Se ha eliminado exitosamente el producto' }} />}
        </div>
    );
}

export default ProductStore;