import './page.css';
import { useState, useEffect } from 'react';
import React from 'react';
import EventAdmin from '../components/eventAdmin/EventAdmin';

export default function AdminEvents() {
  return (
    <div className='main-container'>
      <div className='header-container'>
        <h1 className='H1-Proofile'>ADMINISTRAR EVENTOS</h1>
      </div>
      <div className='information-container'>
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