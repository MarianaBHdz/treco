'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import EventAdmin from '../components/eventAdmin/EventAdmin';
import { useRouter } from 'next/navigation';

export default function AdminEvents() {
  const router = useRouter();
  return (
    <div className='main-container-aevents'>
      <div className='header-container-aevents'>
        <div className='div-H1-aevents'><h1 className='H1-aevents'>ADMINISTRAR EVENTOS</h1></div>
        <div className='buttons-container-aevents'>
          <button className='ddbutton-aevents' onClick={() => {router.push('/adminEvents');}}>AGREGAR EVENTO</button>
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