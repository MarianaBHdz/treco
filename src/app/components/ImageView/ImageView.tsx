'use client'
import './ImageView.css';
import React, { PropsWithoutRef } from 'react';
interface ImageView{
  dataimage: string;
}

function ImageView (props:ImageView){
  return(
    <div className='main-container-imageview'>
      <div className='image-container-imageview'>
        <img className = "image-imageview"src={props.dataimage} />
      </div>
    </div>
  );
}

export default ImageView;