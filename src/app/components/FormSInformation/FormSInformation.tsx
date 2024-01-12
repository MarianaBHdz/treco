import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SField, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Img2Edit,Ibutton,DdivLarge,DivAdj,Cdiv,SAsterisk} from './FormSInformation.style';
import {SuccessPerfil} from '../confirmations/SuccessPerfil';
import CancelConfirmation from '../confirmations/CancelConfirmation';
import ImageModal from './ImageModal';
import axios from 'axios';

export interface Store{
    business_name: string;
    name_store_manager: string;
    store_email: string;
    store_number: string;
    description: string;
    avatar_url: string;
    id: string;
}

export interface  StoreSend{
    storeS: Store;
    onAccept: () => void;
}

//regex for fields
const managerRegExp = /^([A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+ )+[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+$/;
const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const numberRegExp = /^[0-9]{10}$/;
const descriptionRegExp = /^([A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+ )+[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+$/;

const validationSchema = Yup.object().shape({
    nombreTienda: Yup.string()
        .required('Este campo es requerido'),
    nombreEncargado: Yup.string()
        .matches(managerRegExp, 'Debe ser un nombre válido')
        .required('Este campo es requerido'),
    correoElectronico: Yup.string()
        .matches(emailRegExp, 'Correo electrónico inválido')
        .required('Este campo es requerido'),
    numeroTelefono: Yup.string()
        .matches(numberRegExp, 'Debe ser un número de teléfono válido'),
    descripcion: Yup.string()
});

const FormSInformation: React.FC<StoreSend>=({storeS,onAccept}) => {
    const initialValues = {
        nombreTienda: storeS.business_name,
        nombreEncargado: storeS.name_store_manager,
        correoElectronico: storeS.store_email,
        numeroTelefono: storeS.store_number,
        descripcion: storeS.description,
    };
    const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
    const handleImage = () => {
        setIsImageModalOpen(true);
    };
    
    const handleSubmit = async (TiendaIDS:string,values:Object) => {
        try {
          values = { ...values, avatar_url: newImageUrl };
          const JSONval=JSON.stringify(values)
          console.log(JSONval)
          console.log(TiendaIDS)
          const response =await axios.put('http://localhost:3000/api/modificatienda?id='+TiendaIDS,JSONval)
          console.log(response)
          setIsSuccessModalOpen(true);
        } catch (error) {
          console.error(error);
    
        }
    };

    const [newImageUrl, setNewImageUrl] = React.useState(storeS.avatar_url);
    const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = React.useState(false);
    const handleCancel = () => {
        setIsCancelConfirmationOpen(true);
    };  
    

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values =>{
                handleSubmit(storeS.id,values);
                console.log(values);
            }}
            enableReinitialize={true}
        >
           
        <>
        <SForm>
            <Cdiv>
                <Ddiv>
                    <Img2Edit src={newImageUrl} alt="imagentienda" className='IA-contentimagen' />
                    <Ibutton onClick={handleImage}>CAMBIAR IMAGEN</Ibutton>
                </Ddiv>
                <Ddiv>
                    <Slabel htmlFor="nombreTienda">Nombre de la tienda<SAsterisk>*</SAsterisk></Slabel>
                    <Slabel htmlFor="nombreEncargado">Nombre del encargado<SAsterisk>*</SAsterisk></Slabel>
                    <DivAdj></DivAdj>
                    <Slabel htmlFor="correoElectronico">Correo Electrónico<SAsterisk>*</SAsterisk></Slabel>
                    <DivAdj></DivAdj>
                    <DivAdj></DivAdj>
                    <Slabel htmlFor="numeroTelefono">Número de Teléfono<SAsterisk>*</SAsterisk></Slabel>
                    <Slabel htmlFor="numeroTelefono">Descripción</Slabel>
                </Ddiv>
                <DdivLarge>
                    <SField type="text" id="nombreTienda" name="nombreTienda" />
                    <SErrorMessage name="nombreTienda" component="div" />
                    <DivAdj></DivAdj>
                    <DivAdj></DivAdj>
                    <DivAdj></DivAdj>
                    <DivAdj></DivAdj><DivAdj></DivAdj>
                    <DivAdj></DivAdj><DivAdj></DivAdj>
                    <DivAdj></DivAdj>
                    <SField type="text" id="nombreEncargado" name="nombreEncargado" />
                    <SErrorMessage name="nombreEncargado" component="div" />
                    <SField type="email" id="correoElectronico" name="correoElectronico" />
                    <SErrorMessage name="correoElectronico" component="div" />
                    <SField type="text" id="numeroTelefono" name="numeroTelefono" />
                    <SErrorMessage name="numeroTelefono" component="div" />
                    <SField type="text" id="descripcion" name="descripcion" />
                    <SErrorMessage name="descripcion" component="div" />
                </DdivLarge>
                <DivSend>
                    <Sbutton type="submit">ACEPTAR</Sbutton>
                    <Cbutton onClick={handleCancel}>CANCELAR</Cbutton>
                </DivSend>
            </Cdiv>
        </SForm>

        {isSuccessModalOpen && <SuccessPerfil onClose={() => {setIsSuccessModalOpen(false);onAccept();window.location.reload();}} />}
        {isImageModalOpen && (
            <ImageModal
                onClose={() => setIsImageModalOpen(false)}
                imgurl={newImageUrl}
                onImageUrlChange={(url) => {
                setNewImageUrl(url);
                setIsImageModalOpen(false);
                }}
            />
            )}

            {isCancelConfirmationOpen && (
            <CancelConfirmation
            onClose={() => setIsCancelConfirmationOpen(false)}
            onAccept={() => {
                setIsCancelConfirmationOpen(false);
                // reset the newImageUrl to the original one when canceling
                setNewImageUrl(storeS.avatar_url);
                onAccept();
            }}
            />)}
      </>
        </Formik>
    )
}

export default FormSInformation;