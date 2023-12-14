import './DataViewS.css';
import React, { PropsWithoutRef } from 'react';

interface DataViewS{
  data:string;
}

function DataViewS (props:DataViewS){
  return(
    <div className='text-dataviews'>{props.data}</div>
  );
}

export default DataViewS;