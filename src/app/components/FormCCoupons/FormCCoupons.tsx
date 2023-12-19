import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SField, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Ibutton,DdivLarge,DivAdj,Cdiv,SAsterisk} from './FormCCoupons.style';
import {SuccessPerfil} from '../confirmations/SuccessPerfil';
import CancelConfirmation from '../confirmations/CancelConfirmation';
import axios from 'axios';

export interface User {
  material: string;
  numCoupons: number;
  quantityM: string;
  unitM: number;
}

export interface UserSend {
  userID: string | undefined;
  userS: User;
  onAccept: () => void;
}

const quantityMRegExp = /^[0-9]{1,3}[.][0-9]{1,3}$/;


const validationSchema = Yup.object().shape({
  material: Yup.number()
    .required('Este campo es requerido'),
  quantityM: Yup.number()
    .min(1, 'La cantidad debe ser un número positivo')
    .required('Este campo es requerido'),
  unitM: Yup.number()
    .required('Este campo es requerido'),
});
const FormCCoupons: React.FC<UserSend>= ({userS,onAccept,userID}) => { 
  const material =[
    { value: 1, label: 'Juguetes' },
    { value: 2, label: 'Electrónicos' },
    { value: 3, label: 'Cocina' },
    { value: 4, label: 'Muebles' },
    { value: 5, label: 'Hogar' },
    { value: 6, label: 'Zapatos' },
    { value: 8, label: 'Belleza' },
    { value: 7, label: 'Otra' },
    
  ];

  const unitM =[
    { value: 1, label: 'piezas' },
    { value: 2, label: 'kilogramos' },    
  ];

  const initialValues = {
    material: 0,
    quantityM: 0,
    unitM: 0,
  };
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);

  const handleSubmit = async (UserIDS:string|undefined,values:Object) => {
    try {
      const JSONval=JSON.stringify(values)
      console.log(JSONval)
      console.log(UserIDS)
      const response =await axios.put('/api/modificarperfil?user_id='+UserIDS,JSONval)
      console.log(response)
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      setIsSuccessModalOpen(true);
      // Manejo de errores
    }
  };
  const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = React.useState(false);
  const handleCancel = () => {
    setIsCancelConfirmationOpen(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values =>{
        handleSubmit(userID,values)
        console.log(values)
       }}
      enableReinitialize={true}
    >
      {({ setFieldValue }) => (
        <>
        <SForm>
          <Cdiv>
            <Ddiv>
                <Slabel htmlFor="material_id">Selecciona un material<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
                <DivAdj></DivAdj>
                <Slabel htmlFor="quantity">Cantidad<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
                <Slabel htmlFor="unit_id">Selecciona la unidad<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
                <DivAdj></DivAdj>
            </Ddiv>

          <Ddiv>
            <SField
              as="select"
              id="unit_id"
              name="unit_id"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const newValue = parseInt(event.target.value, 10); // Convert value to number
                setFieldValue('unit_id', newValue);
              }}
            >
              <option value="">--Selecciona--</option>
              {unitM.map(unit_id => (
                <option key={unit_id.value} value={unit_id.value}>
                  {unit_id.label}
                </option>
              ))}
            </SField>
            <SErrorMessage name="unit_id" component="div" />

            <SField type="string" id="quantityM" name="quantityM" />
            <SErrorMessage name="quantityM" component="div" />
        
            
          </Ddiv>
         
          

        
            
          <DivSend>
          <Sbutton type="submit">ACEPTAR</Sbutton>
            <Cbutton onClick={handleCancel}>CANCELAR</Cbutton>
            
            
          </DivSend>
          </Cdiv>
        </SForm>
        
        {isSuccessModalOpen && <SuccessPerfil onClose={() => {setIsSuccessModalOpen(false);onAccept();window.location.reload();}} />}
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

export default FormCCoupons;