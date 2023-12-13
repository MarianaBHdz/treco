import React from 'react'
import './inicioCard.css'
import { StaticImageData } from 'next/image';

interface InicioCardProps {
    imagen: StaticImageData;
    descimg: string;
    tittle: string;
    text: string;
  }
  
export default function InicioCard({imagen, descimg, tittle, text}: InicioCardProps){
    return(
        <div className="container-iniciocard">
            <img src={imagen.src} alt={descimg} className="iniciocard-img" />
            <div className="text-container-iniciocard">
                <h1 className="iniciocard-h1">{tittle}</h1>
                <p className="iniciocard-text">{text}</p>
            </div>
        </div>

    )
}