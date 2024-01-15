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
import ModifyUser from '../components/buttons/ModifyUser';
import FormAChargeCoupons from '../components/FormAChargeCoupons/FormAChargeCoupons';
import { useSupabase } from '../supabase-provider';

export default function MiTienda() {
  const {sessionId} = useSession();
  const [store, setStore] = useState<any>({});
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  const { session } = useSupabase();
  const [user, setUser] = useState<any>();

  const [isModalVisible1, setIsModalVisible1] = useState(false)
  const toggleModal1 = () => {
    setIsModalVisible1(wasModalVisible => !wasModalVisible)
  }
  const [isModalVisible2, setIsModalVisible2] = useState(false)
  const toggleModal2 = () => {
    setIsModalVisible2(wasModalVisible => !wasModalVisible)
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

  useEffect(() => {
    //const userId = session?.user?.id;
    axios.get('/api/User?user_id='+sessionId)
      .then((response: any) => {
        console.log(response.data.user);
        setUser(response.data.user);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [session]);

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
            <button className='button-mitienda' onClick={() => {router.push('/StoreProducts');}}>Productos</button>
        </div>
        <div className='button-container-mitienda'>
          <RWDModal header="Cobrar cupones"onBackdropClick={toggleModal2} isModalVisible={isModalVisible2} message="* Campos obligatorios" content={<FormAChargeCoupons userS={user} onAccept={toggleModal2} userID={sessionId || undefined}/>}/>
          <ModifyUser text='COBRAR CUPONES' onClick={toggleModal2}/>
          <div id = "modal-root"></div>
        </div>
       
      </div>

    </div>
  );
}