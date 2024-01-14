import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SField, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Ibutton,DdivLarge,DivAdj,Cdiv,SAsterisk,DivAdj2} from './FormAChargeCoupons.style';
import {RecyclingIdeas} from '../ideas/RecyclingIdeas';
import CancelConfirmation from '../confirmations/CancelConfirmation';
import ConfirmationConfirmation from '../confirmations/ConfirmationConfirmation';
import {SuccessPerfil} from '../confirmations/SuccessPerfil';
import axios from 'axios';

export interface User {
  id: string;
  name: string;
  email: string;
  date_of_birth?: string;
  CURP: string;
  material: number;
  quantityM: string;
  unitM: number;
  numCoupons: number;
}

export interface UserSend {
  userID: string | undefined;
  userS: User;
  onAccept: () => void;
}

const quantityMRegExp = /^[0-9]{1,3}[.][0-9]{1,3}$/;
const idUserFRegExp = /^[0-9]{21}$/

const validationSchema = Yup.object().shape({
  idUserF: Yup.string()
    .matches(idUserFRegExp, 'Debe ingresar un ID válido')
    .min(21, 'Debe haber 21 numeros')
    .max(21, 'Debe haber 21 numeros')
    .required('Este campo es requerido'),
  quantityM: Yup.string()
    .min(1, 'La cantidad debe ser un número positivo')
    .required('Este campo es requerido'),
});
const FormAChargeCoupons: React.FC<UserSend>= ({userS,onAccept,userID}) => { 

  const initialValues = {
    idUserF:'',
    quantityM: '',
  };
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);

  const handleSubmit = async (UserIDS:string|undefined,values:Object) => {
    try {
      console.log('ESTOS SON LOS VALUES',values);
      const JSONval=JSON.stringify(values)
      console.log(JSONval)
      console.log(UserIDS)
      const response =await axios.put('/api/subtractCoupons?user_id='+UserIDS,JSONval)
      console.log(response)
      //setIsSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      // Manejo de errores
    }
  };
  const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = React.useState(false);
  const handleCancel = () => {
    setIsCancelConfirmationOpen(true);
  };
  const [isConfirmationConfirmationOpen, setIsConfirmationConfirmationOpen] = React.useState(false);
  const handleAcept = () => {
    setIsConfirmationConfirmationOpen(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values =>{
        const { idUserF } = values;
        handleSubmit(idUserF,values)
        
      }}
      enableReinitialize={true}
    >
      {({ setFieldValue }) => (
        <>
        <SForm>
          <Cdiv>
            <Ddiv>
                <Slabel htmlFor="idUserF">Número de usuario<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
                <Slabel htmlFor="quantityM">Cantidad de cupones<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
            </Ddiv>

            <Ddiv>
              <SField type="text" id="idUserF" name="idUserF" />
              <SErrorMessage name="idUserF" component="div" />
              <DivAdj2></DivAdj2>

              <SField type="text" id="quantityM" name="quantityM" />
              <SErrorMessage name="quantityM" component="div" />
              <DivAdj2></DivAdj2>

            </Ddiv>
          </Cdiv>
            
            <DivSend>
              <Sbutton onClick={handleAcept}>ACEPTAR</Sbutton>
              <Cbutton onClick={handleCancel}>CANCELAR</Cbutton>
            </DivSend>
        </SForm>
        
        {isSuccessModalOpen && <SuccessPerfil onClose={() => {setIsSuccessModalOpen(false);onAccept();window.location.reload();}} successMessage='...'/>}
        {isConfirmationConfirmationOpen && (
          <ConfirmationConfirmation
            onClose={() => setIsConfirmationConfirmationOpen(false)}
            onAccept={() => {
              setIsConfirmationConfirmationOpen(false);
              onAccept();
            }}
            confirmationMessage='¿Está seguro que quiere cobrar los cupones?'
            successMessage='Se han cobrado exitosamente los cupones.'
        />)}
        {isCancelConfirmationOpen && (
          <CancelConfirmation
            onClose={() => setIsCancelConfirmationOpen(false)}
            onAccept={() => {
              setIsCancelConfirmationOpen(false);
              onAccept();
            }}
        />)}
        </>
      )}
    </Formik>
  );
};

export default FormAChargeCoupons;