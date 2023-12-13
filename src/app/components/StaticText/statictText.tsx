import React from 'react'
import './staticText.css'

interface StaticTextProps {
    title: string;
    text: string;
  }
  
export default function StaticText({title, text}: StaticTextProps){
    return(
        <div className="container-statictext">
            <div className="title-container-statictext">
                <h1 className="title-statictext">{title}</h1>
            </div>
            <div className="text-container-statictext">
                <p className="text-statictext">{text}</p>
            </div>
        </div>

    )
}