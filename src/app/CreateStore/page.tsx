'use client';

import './page.css';
import Mitiendaimg from '../images/Tiendaimg.png';
import {SForm, ImgEdit, Ddiv, Udiv, Tdiv, Slabel, SAsterisk, SField, SErrorMessage, DivSend, Sbutton} from './createstore.style';
import {Formik} from 'formik';
import * as Yup from 'yup';
import React, {useState} from 'react';
import axios from 'axios';
import { Success } from '../components/confirmations/Success';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSession } from '../components/context/SessionContext';

//Expresiones regulares
const urlRegExp =/\.png$|\.jpg/;
const managerRegExp = /^([A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+ )+[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+$/;
const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegExp = /^[0-9]{10}$/;

//Validaciones
const validationSchema = Yup.object({
    business_name: Yup.string()
        .required('El nombre de la tienda es obligatorio'),
    name_store_manager: Yup.string()
        .matches(managerRegExp, 'El campo solo debe contener letras')
        .required('El nombre del encargado es obligatorio'),
    avatar_url: Yup.string()
        .matches(urlRegExp,'La url debe terminar con ".png" o ".jpg"')
        .required('La imagen es obligatoria'),
    store_email: Yup.string()
        .matches(emailRegExp, 'Correo electrónico inválido')
        .required('El email es obligatorio'),
    store_number: Yup.string()
        .matches(numberRegExp, 'Debe ser un número de teléfono válido')
        .required('El numero de telefono es obligatorio')
})

export default function CreateStore (){
    const {sessionId} = useSession();
    const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);

    const handleSendClick = async (UserS:string|null,values:Object) => {
        try {
            if (UserS !== null) {
          const JSONval=JSON.stringify(values)
          console.log(JSONval)
          console.log(UserS)
          const response =await axios.post('http://localhost:3000/api/AddStore?user_id='+UserS,{ data: values })
          console.log(response)
          const response2 = await axios.put(`http://localhost:3000/api/ActualizarRole?user_id=${UserS}`, {
            newRole: 'SELLER',
            });
          console.log('Rol actualizado:', response2);
          console.log('Tienda creada');
          setIsSuccessModalOpen(true);
        };
        } catch (error) {
          console.error(error);
        }
      };

    console.log(sessionId)
    return(
        <div className="main-container-createstore">
            <div className='header-container-createstore'>
                <h1 className='header-createstore'>Crear Tienda</h1>
                <p className='text-createstore'>Llena los datos de tu tienda</p>
            </div>
            <div className="container-campob-createstore">
                <p className="campob-createstore">*Campos Obligatorios</p>
            </div>
            <div className="form-createstore">
                <Formik
                    initialValues={{
                        business_name: '',
                        name_store_manager: '',
                        avatar_url: '',
                        store_email: ' ',
                        store_number: '',
                        description: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={
                        values =>{
                            handleSendClick(sessionId,values)
                        }
                    }
                >
                    {({ setFieldValue }) => (
                        <>
                            <SForm>
                                <Ddiv>
                                    <ImgEdit src={Mitiendaimg.src} alt="imagentienda" />
                                </Ddiv>
                                <Ddiv>
                                    <Udiv>
                                        <Slabel htmlFor="business_name">Nombre de la tienda</Slabel>
                                        <Slabel><SAsterisk>*</SAsterisk></Slabel>
                                    </Udiv>
                                    <Tdiv>
                                        <SField type="text" id="business_name" name="business_name" />
                                        <SErrorMessage name="business_name" component="div" />
                                    </Tdiv>
                                </Ddiv>

                                <Ddiv>
                                    <Udiv>
                                        <Slabel htmlFor="name_store_manager">Nombre del encargado</Slabel>
                                        <Slabel><SAsterisk>*</SAsterisk></Slabel>
                                    </Udiv>
                                    <Tdiv>
                                        <SField type="text" id="name_store_manager" name="name_store_manager" />
                                        <SErrorMessage name="name_store_manager" component="div" />
                                    </Tdiv>
                                </Ddiv>

                                <Ddiv>
                                    <Udiv>
                                        <Slabel htmlFor="store_email">Correo electrónico</Slabel>
                                        <Slabel><SAsterisk>*</SAsterisk></Slabel>
                                    </Udiv>
                                    <Tdiv>
                                        <SField type="email" id="store_email" name="store_email" />
                                        <SErrorMessage name="store_email" component="div" />
                                    </Tdiv>
                                </Ddiv>

                                <Ddiv>
                                    <Udiv>
                                        <Slabel htmlFor="store_number">Número de Teléfono</Slabel>
                                        <Slabel><SAsterisk>*</SAsterisk></Slabel>
                                    </Udiv>
                                    <Tdiv>
                                        <SField type="text" id="store_number" name="store_number" />
                                        <SErrorMessage name="store_number" component="div" />
                                    </Tdiv>
                                </Ddiv>

                                <Ddiv>
                                    <Udiv>
                                        <Slabel htmlFor="avatar_url">Link de la foto de tu tienda</Slabel>
                                        <Slabel><SAsterisk>*</SAsterisk></Slabel>
                                    </Udiv>
                                    <Tdiv>
                                        <SField type="text" id="avatar_url" name="avatar_url" />
                                        <SErrorMessage name="avatar_url" component="div" />
                                    </Tdiv>
                                </Ddiv>

                                <Ddiv>
                                    <Udiv>
                                        <Slabel htmlFor="description">Descripción</Slabel>
                                    </Udiv>
                                    <Tdiv>
                                        <SField type="text" id="description" name="description" />
                                        <SErrorMessage name="description" component="div" />
                                    </Tdiv>
                                </Ddiv>
                                <DivSend>
                                    <Sbutton type="submit">Crear</Sbutton>
                                </DivSend>
                            </SForm>
                            {isSuccessModalOpen && <Success onClose={() => {setIsSuccessModalOpen(false); router.push('./MiTienda')}} successProps={{ message: 'Se ha creado exitosamente la tienda' }} />}
                        </>
                    )}
                </Formik>
            </div>
        </div>
    )
}