'use client';

import './page.css';
import { StoreComponent } from '../components/StoreComponent/StoreComponent';
export default async function TiendasOficiales(){
  

  return (
    <div className="main-container-cstores">
      <div className='header-container-cstores'>
				<div className='div-H1-cstores'><h1 className='H1-cstores'>TIENDAS Y PRODUCTOS</h1></div>
      </div>
      <div className='content-cstores'>
        <StoreComponent/>
      </div>      
        
    </div>
    )
} 