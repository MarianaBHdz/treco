'use client'
import './DataView.css';
import React, { PropsWithoutRef } from 'react';
interface DataView{
  dataname:string;
  datainformation:string;
}

function DataView (props:DataView){
  return(
    <div className='data-container'>
      <div className='data-first-part'>
        <p>{props.dataname}</p>
      </div>
      <div className='data-second-part'>
        <p>{props.datainformation}</p>
      </div>
    </div>
  );
}

export default DataView;