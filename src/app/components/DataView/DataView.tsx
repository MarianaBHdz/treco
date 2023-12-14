'use client'
import './DataView.css';
import React, { PropsWithoutRef } from 'react';
interface DataView{
  datanum: number;
  dataname:string;
  datainformation:string;
}

function DataView (props:DataView){
  return(
    <div className={`data-container ${(props.datanum == 1) ? 'uno' : (props.datanum == 2) ? 'dos' : null}`}>
      <div className= {`data-first-part ${(props.datanum == 1) ? 'unofp' : (props.datanum == 2) ? 'dosfp' : null}`}>
        <p>{props.dataname}</p>
      </div>
      <div className={`data-second-part ${(props.datanum == 1) ? 'unosp' : (props.datanum == 2) ? 'dossp' : null}`}>
        <p>{props.datainformation}</p>
      </div>
    </div>
  );
}

export default DataView;