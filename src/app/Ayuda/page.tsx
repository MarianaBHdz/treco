import React from 'react';
import './page.css';
import StaticText from '../components/StaticText/statictText';

export default function Ayuda(){
    return( 
        <div className='container-ayuda'>
            <div className="header-container-ayuda">
                <h1 className="header-ayuda">Ayuda</h1>
                <p className="header-text-ayuda">Aquí te proporcionamos algunas preguntas frecuentes.</p>
            </div>
            <StaticText
                title="¿Que materiales reciben?"
                text="Recibimos únicamente los siguientes materiales:"
            />
            <ul className='lista-ayuda'>
                <li>Latas de aluminio</li>
                <li>Botella de vidrio</li>
                <li>HDPE</li>
                <li>PET</li>
                <li>Papel y cartón</li>
                <li>Tetrapack</li>
                <li>Aceite de cocina usado (donación, no intercambio)</li>
                <li>Residuos electrónicos y eléctricos</li>
            </ul>
            <p className='p-ayuda'>No recibimos</p>
            <ul className='lista-ayuda'>
                <li>Residuos voluminosos</li>
                <li>Focos</li>
                <li>Cartón de huevo</li>
                <li>Tapitas</li>
                <li>Unicel</li>
                <li>Ropa</li>
                <li>Juguetes</li>
            </ul>
            <StaticText
                title="¿Se asignan los cupones cuando hago el calculo desde mi cuenta?"
                text="No, tienes que acudir al evento en la fecha y hora indicada para que se asignen tus cupones a tu cuenta, puede no coincidir con los calculados ya que el material será pesado nuevamente  y puede variar con respecto a esto."
            />
            <StaticText
                title="¿Cualquier tienda pude participar en el evento?"
                text="No, solo tiendas de insumos naturales (como verduras, frutas y plantas) y tiendas de productos hechos con materiales reciclados podrán participar; ademas tienen que ser tiendas mexicanas, el administrador podrá eliminar tiendas de creerlo necesario y se les notificara con un correo y una llamada telefonica en caso de que así sea."
            />
        </div>
    )
}