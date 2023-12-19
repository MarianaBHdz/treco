import './ModifyUser.css';
import React, { PropsWithoutRef } from 'react';
interface ModifyUser{
  text:string;
  onClick:()=>void;
}

function ModifyUser (props:ModifyUser){
  return(
    /*<div
      className='button-container'>
      <p>{props.text}</p>
    </div>*/
    <button
      className='button-modify'
      onClick={props.onClick}
      >
      {props.text}
    </button>
  );
}

export default ModifyUser;