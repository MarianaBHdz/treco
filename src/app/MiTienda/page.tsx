'use client';
import './page.css';
import React from 'react';
import { useRouter } from 'next/navigation';
import DataViewStore from '../components/DataViewStore/dataViewStore';
import { useSession } from '../components/context/SessionContext';
import axios from 'axios';
import {useEffect, useState} from 'react';
import FormStore from '../components/FormSInformation/FormSInformation';
import RWDModal from '../components/ModalPopup/RWDModal';

export default function MiTienda() {
  const {sessionId} = useSession();
  const [store, setStore] = useState<any>({});
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  useEffect(() => {
    axios.get('/api/User/store?user_id='+sessionId)
    .then((response)=>{
      setStore(response.data.user_store);
      
    })
    .catch((error) =>{
      console.log(error);
    })
  },[]);

  return (
    <div className='container-mitienda'>
      <div className='header-container-mitienda'>
			<h1 className='header-mitienda'>Visualizar información</h1>
            <p className='text-mitienda'>Administra tu cuenta</p>
      </div>
      <div className='data-container-mitienda'>
        <div className="container-img-mitienda">
            <img src={store.avatar_url} alt="Logo Tienda" className="img-mitienda" />
        </div>
            <DataViewStore dataname='Nombre de la tienda' datainformation= {store.business_name} />
            <DataViewStore dataname='Nombre del encargado' datainformation={store.name_store_manager} />
            <DataViewStore dataname='Correo electrónico' datainformation={store.store_email}/>
            <DataViewStore dataname='Número de teléfono' datainformation={store.store_number}/>
            <DataViewStore dataname='Descripción' datainformation={store.description}/>
            <RWDModal header="Modificar Información"onBackdropClick={toggleModal} isModalVisible={isModalVisible} message="* Campos obligatorios" content={<FormStore storeS={store} onAccept={toggleModal}/>}/>
        <div id = "modal-root"></div>
      </div>
      <div className='button-main-container-mitienda'>
        <div className='button-container-mitienda'>
            <button className='button-mitienda' onClick={toggleModal}>Modificar información</button>
        </div>
        <div className='button-container-mitienda'>
            <button className='button-mitienda' onClick={() => {router.push('/Productos');}}>Productos</button>
        </div>
        <div className='button-container-mitienda'>
            <button className='button-mitienda' onClick={() => {router.push('/CobrarCupones');}}>Cobrar cupones</button>
        </div>
      </div>

    </div>
  );
}