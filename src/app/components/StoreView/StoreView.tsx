'use client'
import './StoreView.css';
import React, { PropsWithoutRef, useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

interface StoreView{
  dataimage: string;
  dataname:string;
}

function StoreView (props:StoreView){
  return(
    <div className='main-container-storeview'>
      <div className='image-container-storeview'>
        <img className = "image-storeview"src={props.dataimage} />
      </div>
      <div className='name-container-storeview'>
        <p className='name-storeview'>{props.dataname}</p>
      </div>
    </div>
  );
}

export default StoreView;