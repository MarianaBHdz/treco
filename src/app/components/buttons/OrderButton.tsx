'use client'
import React from "react";
import './OrderButton.css';
import { useState } from "react";

interface ClickHandler{
  (event:React.MouseEvent<HTMLButtonElement>):void;
}

interface OrderButton{
  selected:boolean;
  text:string;
  alHacerClick:ClickHandler;
}

function OrderButton (props:OrderButton){
  return(
    <button
      className={props.selected ? 'OrderButton selected' : 'OrderButton'}
      onClick={props.alHacerClick}>
      {props.text}
    </button>
  );
}

export default OrderButton;