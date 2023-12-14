import './DataViewS.css';
import React, { PropsWithoutRef } from 'react';

interface DataViewS{
  num: number;
  data:string;
}

function DataViewS (props:DataViewS){
  return(
    <div className={`text-dataviews ${(props.num == 1) ? 'uno' : (props.num == 2) ? 'dos' : null}`}>
      {props.data}
    </div>
  );
}

export default DataViewS;