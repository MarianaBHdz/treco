'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import RWDModal from "../components/ModalPopup/RWDModal";
import ModifyUser from '../components/buttons/ModifyUser';
import FormAGiveCoupons from '../components/FormAGiveCoupons/FormAGiveCoupons';
import FormAChargeCoupons from '../components/FormAChargeCoupons/FormAChargeCoupons'
import { useSession } from '../components/context/SessionContext';
import { useSupabase } from '../supabase-provider';
import axios from 'axios';



export default function AdminCoupons() {
  const router = useRouter();
  const { sessionId } = useSession();
  console.log('Id del usario');
  console.log(sessionId);
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
    <div className='main-container-acoupons'>
      <div className='header-container-acoupons'>
        <h1 className='H1-acoupons'>ADMINISTRAR CUPONES</h1>
      </div>
      <div className='buttons-container-acoupons'>
        <RWDModal header="Otorgar cupones"onBackdropClick={toggleModal1} isModalVisible={isModalVisible1} message="* Campos obligatorios" content={<FormAGiveCoupons userS={user} onAccept={toggleModal1} userID={sessionId || undefined}/>}/>
        <ModifyUser text='OTORGAR CUPONES' onClick={toggleModal1}/>
        <div id = "modal-root"></div>
        <br/> 
        <RWDModal header="Cobrar cupones"onBackdropClick={toggleModal2} isModalVisible={isModalVisible2} message="* Campos obligatorios" content={<FormAChargeCoupons userS={user} onAccept={toggleModal2} userID={sessionId || undefined}/>}/>
        <ModifyUser text='COBRAR CUPONES' onClick={toggleModal2}/>
        <div id = "modal-root"></div>
      </div>
    </div>
  );
}