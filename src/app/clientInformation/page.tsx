'use client'
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import DataView from '../components/DataView/DataView';
import axios from 'axios';
import { useSupabase } from '../supabase-provider';

export default function ClientInformation() {
  const router = useRouter();

  const { session } = useSupabase();
  const [user, setUser] = useState<any>();

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

  const date=user?.date_of_birth?.split('T')[0]

  return (
    <div className='main-container-cinformation'>
      <div className='header-container-cinformation'>
				<h1 className='H1-ccoupons'>MI PERFIL</h1>
        <p className='description-Profile'>Administra tu cuenta</p>
      </div>
      <div className='information-container-cinformation'>
        <DataView datanum={1} dataname='Nombre y apellido' datainformation={user?.name} />
        <DataView datanum={1} dataname='Correo electrónico' datainformation={user?.email} />
        <DataView datanum={1} dataname='Fecha de nacimiento' datainformation={date}/>
        <DataView datanum={1} dataname='CURP' datainformation={user?.CURP}/>
      </div>
      <div className='buttons-container-cinformation'>
        <button className='ddbutton-cinformation' onClick={() => {router.push('/adminEvents');}}>MODIFICAR</button>
      </div>

    </div>
  );
}