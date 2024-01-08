'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import DataViewS from '../components/DataViewS/DataViewS';
import { useSupabase } from '../supabase-provider';
import axios from 'axios';
import FormCCoupons from '../components/FormCCoupons/FormCCoupons';
import RWDModal from "../components/ModalPopup/RWDModal";
import ModifyUser from '../components/buttons/ModifyUser';



export default function ClientCoupons() {
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
    <div className='main-container-ccoupons'>
      <div className='header-container-ccoupons'>
				<div className='div-H1-ccoupons'><h1 className='H1-ccoupons'>MIS CUPONES</h1></div>
      </div>
			<div className='content-container-ccoupons'>
				<div className='coupons-container-ccoupons'>
					<div className='icon-container-ccoupons'>
						<div className='icon-div-eventc'><BsFillTicketPerforatedFill className='icon-coupon'/></div>
					</div>
					<div className='text-container-ccoupons'>
						<DataViewS num={1} data={user?.numCoupons}/> <p className='msg-ccoupons'>CUPONES DISPONIBLES</p>
					</div>
				</div>
        <div className='buttons-container-ccoupons'>
          <RWDModal header="Calcular cupones"onBackdropClick={toggleModal} isModalVisible={isModalVisible} message="* Campos obligatorios" content={<FormCCoupons userS={user} onAccept={toggleModal} userID={'FFWEE344F4S'}/>}/>
          <ModifyUser text='CALCULAR CUPONES' onClick={toggleModal}/>
          <div id = "modal-root"></div>
        </div>
			</div>
        
    </div>
  );
}