'use client';
import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import EventClient from '../components/eventClient/EventClient';



export default function ClientEvents() {
  const router = useRouter();
  return (
    <div className='main-container-cevents'>
      <div className='header-container-cevents'>
        <h1 className='H1-cevents'>EVENTOS</h1>
      </div>
      <div className='buttons-container-cevents'>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminEvents');}}>TODOS</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>ENERO</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>FEBRERO</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>MARZO</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>ABRIL</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>MAYO</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>JUNIO</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>JULIO</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>AGOSTO</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>SEPTIEMBRE</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>OCTUBRE</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>NOVIEMBRE</button>
        <button className='ddbutton-cevents' onClick={() => {router.push('/adminCoupons');}}>DICIEMBRE</button>
      </div>
      <div className='events-container-cevents'>
        <EventClient 
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