'use client'
import './dataViewStore.css';

interface DataViewStore{
  dataname:string;
  datainformation:string;
}

function DataViewStore (props:DataViewStore){
  return(
    <div className='dataviewstore-container'>
      <div className='dataviewstore-first-part'>
        <p>{props.dataname}</p>
      </div>
      <div className='dataviewstore-second-part'>
        <p>{props.datainformation}</p>
      </div>
    </div>
  );
}

export default DataViewStore;