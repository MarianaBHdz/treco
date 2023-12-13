import React from 'react';
import './page.css';
import StaticText from '../components/StaticText/statictText';
import Conocenosimg from '../images/Conocenos.png';

export default function Conocenos(){
    return( 
        <div className='container-conocenos'>
            <div className="header-container-conocenos">
                <h1 className="header-conocenos">Conócenos</h1>
                <p className="header-text-conocenos">Conoce más acerca del mercado de trueque y cómo funciona</p>
            </div>
            <div className="content-container-conocenos">
                <img src={Conocenosimg.src} alt="Conocenos" className="img-conocenos" />
                <div className="container-conocenos-statictext">
                    <StaticText
                        title="Introducción"
                        text="Mercado de Trueque es un programa de educación ambiental, enfocado en la separación de residuos sólidos domiciliarios desde el origen, y en la promoción del reciclaje para la conservación de los recursos naturales y la biodiversidad, así como para la mitigación del cambio climático, en la Ciudad de México.
                        Es un intercambio entre los residuos sólidos reciclables limpios y ordenados, por artículos de primera necesidad, plantas, hortalizas y/o servicios, que son incentivos para motivar el interés y participación en el mejoramiento ambiental."
                    />
                    <StaticText
                        title="Objetivo"
                        text="Tiene como objetivo promover la participación de la población en el mejoramiento del medio ambiente de nuestra ciudad, a través de la disminución, separación y reciclaje de los residuos sólidos, así como dar a conocer la importancia de la conservación de los recursos naturales y los servicios ambientales que nos ofrecen."
                    />
                    <StaticText
                        title="Beneficiarios"
                        text="Es una actividad integral, donde los participantes aprenden desde sus casas a separar ordenadamente sus residuos reciclables, no reciclables y orgánicos, dejando de hacer basura, y se entiende que los residuos son recursos naturales que deben ser reusados y reciclados, y donde, además, participa toda la familia. En el Mercado de Trueque, también se puede aprender de otros temas sobre el ambiente como: cambio climático, biodiversidad y uso sustentable del agua, entre otros, y como se vinculan con nuestra vida diaria, así mismo, podemos encontrar alternativas para mejorar nuestro entorno.
                        Es itinerante, lo que permite llevarlo a cabo en diferentes lugares de la ciudad y dar oportunidad a más ciudadanos de participar y aprender."
                    />
                    <StaticText
                        title="Requisitos"
                        text="El mínimo de residuos por persona es de 1 kg a 10 kg como máximo. Por ejemplo, puedes llevar separados 4 kg de vidrio y 6 kg de PET. No revueltos."
                    />
                    <StaticText
                        title="¿Cómo participar?"
                        text="Es muy fácil participar, sólo debes estar pendiente de las fechas y lugares donde se llevará acabo. En esta época, donde todos debemos cuidarnos, aparta tu cita en el link que aparecen en los banners de promoción que salen en el Facebook del Mercado, en la página de la Sedema, de educación ambiental y otros espacios. Puedes llevar: cartón, papel, pet, latas de aluminio y fierro, Tetrapak y botellas de vidrio, que no sean de perfume o medicamentos, limpios, aplastados y ordenados.
                        Al entregar tus residuos, los pesaremos, con lo cual puedes ver cuantos residuos estás generando, y te invitamos a modificar tu consumo. Te daremos puntos verdes que puedes canjear por diversos productos, y recuerda que lo más importante es que esos residuos, no irán a parar a rellenos sanitarios, tiraderos, alcantarillas y mares, donde crean muchos problemas ambientales en suelo, agua y aire.
                        Tiene un horario de 8:00 a 14:00 hrs.
                        También lleva tu aceite de cocinar usado. No lo tires al drenaje."
                    />
                </div>
            </div>
        </div>
    )
}