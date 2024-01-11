import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SField, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Ibutton,DdivLarge,DivAdj,Cdiv,SAsterisk} from './FormCCoupons.style';
import {RecyclingIdeas} from '../ideas/RecyclingIdeas';
import CancelConfirmation from '../confirmations/CancelConfirmation';
import axios from 'axios';

export interface User {
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


const validationSchema = Yup.object().shape({
  material: Yup.string()
    .required('Este campo es requerido'),
  quantityM: Yup.string()
    .min(1, 'La cantidad debe ser un número positivo')
    .required('Este campo es requerido'),
  unitM: Yup.number()
    .required('Este campo es requerido'),
});
const FormCCoupons: React.FC<UserSend>= ({userS,onAccept,userID}) => { 
  const materialM =[
    { value: 1, label: 'Aluminio' },
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
    nombreApellido: userS.name,
    fechaNacimiento: userS.date_of_birth,
    CURP: userS.CURP,
    material: 0,
    quantityM: '',
    unitM: 0,
  };
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);

  const handleSubmit = async (UserIDS:string|undefined,values:Object) => {
    try {
      const JSONval=JSON.stringify(values)
      console.log(JSONval)
      console.log(UserIDS)
      const response =await axios.put('/api/modificaperfil?user_id='+UserIDS,JSONval)
      console.log(response)
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
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
        //handleSubmit(userID,values)
        //console.log('Estos son los que se envian',values)

        // Get the values from the form
        const { unitM, quantityM, material } = values;
        let calculatedNumCoupons = 0;

        if (unitM == 1) { //piezas
          if (material === 1) { // If the material is 1 (Aluminio)
            calculatedNumCoupons = parseInt(quantityM,10) * 15; //Because each can weighs 15gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.16);
          }else if (material === 2) { // If the material is 2 (Botellas de vidrio)
            calculatedNumCoupons = parseInt(quantityM,10) * 400; //Because each thing weighs 400gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.007);
          }else if (material === 3) { // If the material is 3 (Latas de fierro)
            calculatedNumCoupons = parseInt(quantityM,10) * 25; //Because each thing weighs 25gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.028);
          }else if (material === 4) { // If the material is 4 (HDPE)
            calculatedNumCoupons = parseInt(quantityM,10) * 90; //Because each thing weighs 90gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.064);
          }else if (material === 5) { // If the material is 5 (PET)
            calculatedNumCoupons = parseInt(quantityM,10) * 40; //Because each thing weighs 40gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.056);
          }else if (material === 6) { // If the material is 6 (Papel)
            calculatedNumCoupons = parseInt(quantityM,10) * 70; //Because each thing weighs 70gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.028);
          }else if (material === 7) { // If the material is 7 (Carton)
            calculatedNumCoupons = parseInt(quantityM,10) * 500; //Because each thing weighs 500gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.024);
          }else if (material === 8) { // If the material is 8 (Tetrapack)
            calculatedNumCoupons = parseInt(quantityM,10) * 400; //Because each thing weighs 400gr
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 0.020);
          }else if (material === 9) { // If the material is 9 (Aceite de cocina)
            calculatedNumCoupons = 0; //Because each thing weighs 15gr
          }else if (material === 10) { // If the material is 10 (Residuos electronicos)
            calculatedNumCoupons = parseInt(quantityM,10) * 20; 
          }else if (material === 11) { // If the material is 11 (Residuos electricos)
            calculatedNumCoupons = parseInt(quantityM,10) * 20; 
          }
        }else if (unitM == 2){ //kilogramos
          calculatedNumCoupons = parseInt(quantityM,10);
          if (material === 1) { // If the material is 1 (Aluminio)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 160);
          }else if (material === 2) { // If the material is 2 (Botellas de vidrio)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 7);
          }else if (material === 3) { // If the material is 3 (Latas de fierro)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 28);
          }else if (material === 4) { // If the material is 4 (HDPE)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 64);
          }else if (material === 5) { // If the material is 5 (PET)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 56);
          }else if (material === 6) { // If the material is 6 (Papel)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 28);
          }else if (material === 7) { // If the material is 7 (Carton)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 24);
          }else if (material === 8) { // If the material is 8 (Tetrapack)
            calculatedNumCoupons = Math.round(calculatedNumCoupons * 20);
          }else if (material === 9) { // If the material is 9 (Aceite de cocina)
            calculatedNumCoupons = 0; //Because each thing weighs 15gr
          }else if (material === 10) { // If the material is 10 (Residuos electronicos)
            calculatedNumCoupons = parseInt(quantityM,10) * 100; 
          }else if (material === 11) { // If the material is 11 (Residuos electricos)
            calculatedNumCoupons = parseInt(quantityM,10) * 100; 
          }
        }
        // Asignamos el valor calculado a numCoupons en los valores del formulario
        const updatedValues = { ...values, unitM: calculatedNumCoupons };

        // Llamamos a la función handleSubmit con los valores actualizados
        handleSubmit(userID, updatedValues); // <-- Aquí deberías enviar updatedValues

        console.log('Estos son los que se envian', updatedValues);
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

              <SField type="text" id="quantityM" name="quantityM" />
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
        
        {isSuccessModalOpen && <RecyclingIdeas onClose={() => {setIsSuccessModalOpen(false);onAccept();window.location.reload();}} />}
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