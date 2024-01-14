import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SField, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Img2Edit,Ibutton,DdivLarge,DivAdj,Cdiv,SAsterisk} from './FormCreateProduct.style';
import { Success } from '../confirmations/Success';
import CancelConfirmation from '../confirmations/CancelConfirmation';
import ImageModal from '../FormSInformation/ImageModal';
import axios from 'axios';

export interface Producto{
    name: string;
    thumbnail_url: string;
}

export interface  ProductoSend{
    storeId: any;
    productoS: {
        name: string|null;
        thumbnail_url: string;
    };
    onAccept: () => void;
}

//regex for fields
const urlRegExp =/\.png$|\.jpg/;

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Este campo es requerido'),
    thumbnail_url: Yup.string()
        .matches(urlRegExp, 'Debe ser un url válido')
        .required('Este campo es requerido')
});

const FormCreateProduct: React.FC<ProductoSend>=({storeId,productoS,onAccept}) => {
    const initialValues = {
        name: productoS.name,
        thumbnail_url: productoS.thumbnail_url
    };

    const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
    const handleImage = () => {
        setIsImageModalOpen(true);
    };
    
    const handleSubmit = async (ProductoIDS:string,values:Object) => {
        try {
          values = { ...values, thumbnail_url: newImageUrl };
          const JSONval=JSON.stringify(values)
          console.log(JSONval)
          const response =await axios.put('http://localhost:3000/api/CreateProduct?store_id='+ProductoIDS,JSONval)
          console.log(response)
          setIsSuccessModalOpen(true);
        } catch (error) {
          console.error(error);
    
        }
    };

    const [newImageUrl, setNewImageUrl] = React.useState(productoS.thumbnail_url);
    const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = React.useState(false);
    const handleCancel = () => {
        setIsCancelConfirmationOpen(true);
    };  
    

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values =>{
                console.log('Formik onSubmit values:', values);
                console.log(storeId);
                handleSubmit(storeId,values);
                console.log(values);
            }}
            enableReinitialize={true}
        >
            {() => {
            console.log('FormCreateProduct is rendering');
            return (
        <>
        <SForm>
            <Cdiv>
                <Ddiv>
                    <Img2Edit src={newImageUrl} alt="imagentienda" className='IA-contentimagen' />
                    <Ibutton onClick={handleImage}>CAMBIAR IMAGEN</Ibutton>
                </Ddiv>
                <Ddiv>
                    <Slabel htmlFor="name">Nombre del Producto<SAsterisk>*</SAsterisk></Slabel>
                    <DivAdj></DivAdj>
                </Ddiv>
                <DdivLarge>
                    <SField type="text" id="name" name="name" />
                    <SErrorMessage name="name" component="div" />
                    <DivAdj></DivAdj>
                </DdivLarge>
                <DivSend>
                    <Sbutton type="submit">ACEPTAR</Sbutton>
                    <Cbutton onClick={handleCancel}>CANCELAR</Cbutton>
                </DivSend>
            </Cdiv>
        </SForm>

        {isSuccessModalOpen && <Success onClose={() => {setIsSuccessModalOpen(false); window.location.reload()}} successProps={{ message: 'Se ha modificado exitosamente la información del producto' }} />}
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
                setNewImageUrl(productoS.thumbnail_url);
                onAccept();
            }}
            />)}
      </>
      );
    }}
        </Formik>
    )
}

export default FormCreateProduct;