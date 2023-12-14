'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import DataViewS from '../components/DataViewS/DataViewS';

export default function ClientCoupons() {
  const router = useRouter();
  return (
    <div className='main-container-ccoupons'>
      <div className='header-container-ccoupons'>
				<div className='div-H1-ccoupons'><h1 className='H1-ccoupons'>MIS CUPONES</h1></div>
				<div className='buttons-container-ccoupons'>
          <button className='ddbutton-ccoupons' onClick={() => {router.push('/adminEvents');}}>CALCULAR CUPONES</button>
        </div>
      </div>
			<div className='content-container-ccoupons'>
				<div className='coupons-container-ccoupons'>
					<div className='icon-container-ccoupons'>
						<div className='icon-div-eventc'><BsFillTicketPerforatedFill className='icon-coupon'/></div>
					</div>
					<div className='text-container-ccoupons'>
						<DataViewS num={1} data='19'/> <p className='msg-ccoupons'>CUPONES DISPONIBLES</p>
					</div>
				</div>
			</div>
        
    </div>
  );
}