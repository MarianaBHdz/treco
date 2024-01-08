'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import EventAdmin from '../components/eventAdmin/EventAdmin';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSupabase } from '../supabase-provider';
import FormANewEvent from '../components/FormANewEvent/FormANewEvent';
import RWDModal from '../components/ModalPopup/RWDModal';
import ModifyUser from '../components/buttons/ModifyUser';

export default function AdminEvents() {
  const router = useRouter();

  const { session } = useSupabase();
  const [user, setUser] = useState<any>();

  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }


  useEffect(() => {
    //const userId = session?.user?.id;
    axios.get('/api/User?user_id=FFWEE344F4S')
      .then((response: any) => {
        console.log(response.data.user);
        setUser(response.data.user);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [session]);

  return (
    <div className='main-container-aevents'>
      <div className='header-container-aevents'>
        <div className='div-H1-aevents'><h1 className='H1-aevents'>ADMINISTRAR EVENTOS</h1></div>
        <div className='buttons-container-aevents'>
          <RWDModal header="Modificar Perfil"onBackdropClick={toggleModal} isModalVisible={isModalVisible} message="* Campos obligatorios" content={<FormANewEvent userS={user} onAccept={toggleModal} userID={'FFWEE344F4S'}/>}/>
          <ModifyUser text='CREAR EVENTO' onClick={toggleModal}/>
          <div id = "modal-root"></div>
        </div>
      </div> 
      <div className='information-container-aevents'>
        <EventAdmin
          eventname='Mercado de trueque'
          eventstartdate='18/09/23'
          eventfinishdate='20/09/23'
          eventstarthour='18:09'
          eventfinishhour='20:00'
          eventaddress='Aristóteles, Polanco, Polanco IV Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX'
        />
      </div>
    </div>
  );
}