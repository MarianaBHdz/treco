import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import './carousel.css'

interface CarouselProps {
    imagenes: string[]; 
  }
  

export default function Carousel({ imagenes }: CarouselProps){
    return(
        <div className="container-carousel">
            <button className="button-carousel"><IoIosArrowDropleft/></button>
            <div className="container-imagenes">
            {imagenes.map((imagen, index)=>{
                return <img key={index} src={imagen} alt="Imagen carrusel" className="imagen-carousel"/>
            })}
            </div>
            <button className="button-carousel"><IoIosArrowDropright/></button>
        </div>

    )
}