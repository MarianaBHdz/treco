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
  const materialM =[
    { value: 1, label: 'Alumino' },
    { value: 2, label: 'Botellas de vidrio' },
    { value: 3, label: 'Latas de fierro' },
    { value: 4, label: 'HDPE' },
    { value: 5, label: 'PET' },
    { value: 6, label: 'Papel' },
    { value: 7, label: 'Carton' },
    { value: 8, label: 'Tetrapack' },
    { value: 9, label: 'Aceite de cocina' },
    { value: 10, label: 'Residuos electronicos' },
    { value: 11, label: 'Residuos electricos' },
  ];

  const unitMM =[
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
                <Slabel htmlFor="material">Selecciona un material<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
                <DivAdj></DivAdj>
                <Slabel htmlFor="quantityM">Cantidad<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
                <Slabel htmlFor="unitM">Selecciona la unidad<SAsterisk>*</SAsterisk></Slabel>
                <DivAdj></DivAdj>
                <DivAdj></DivAdj>
            </Ddiv>

            <Ddiv>
              <SField
                as="select"
                id="material"
                name="material"
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  const newValue = parseInt(event.target.value, 10); // Convert value to number
                  setFieldValue('material', newValue);
                }}
              >
                <option value="">--Selecciona--</option>
                {materialM.map(material => (
                  <option key={material.value} value={material.value}>
                    {material.label}
                  </option>
                ))}
              </SField>
              <SErrorMessage name="material" component="div" />

              <SField type="string" id="quantityM" name="quantityM" />
              <SErrorMessage name="quantityM" component="div" />

              <SField
                as="select"
                id="unitM"
                name="unitM"
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  const newValue = parseInt(event.target.value, 10); // Convert value to number
                  setFieldValue('unitM', newValue);
                }}
              >
                <option value="">--Selecciona--</option>
                {unitMM.map(unitM => (
                  <option key={unitM.value} value={unitM.value}>
                    {unitM.label}
                  </option>
                ))}
              </SField>
              <SErrorMessage name="unitM" component="div" />
            </Ddiv>
          </Cdiv>
            
            <DivSend>
              <Sbutton type="submit">ACEPTAR</Sbutton>
              <Cbutton onClick={handleCancel}>CANCELAR</Cbutton>
            </DivSend>
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