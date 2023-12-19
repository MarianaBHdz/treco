import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SAsterisk, SCorreo, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Udiv, Tdiv,SDatePicker,SFieldName,SFieldNumber,SField,SFieldCURP} from './FormCInformation.style';
import {SuccessPerfil} from '../confirmations/SuccessPerfil';
import CancelConfirmation from '../confirmations/CancelConfirmation';
import axios from 'axios';

export interface User {
  name: string;
  email: string;
  date_of_birth?: string;
  CURP: string;
}

export interface UserSend {
  userID: string | undefined;
  userS: User;
  onAccept: () => void;
}
//regex for fields
const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const nameRegExp = /^([A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+ )+[A-Za-zÁÉÍÓÚáéíóúñÑüÜ]+$/;
const CURPRegExp = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9]{2}$/;



// Current date minus 17 years
const seventeenYearsAgo = new Date();
seventeenYearsAgo.setFullYear(seventeenYearsAgo.getFullYear() - 17);
const onehoundredYearsAgo = new Date();
onehoundredYearsAgo.setFullYear(onehoundredYearsAgo.getFullYear() - 100);

const validationSchema = Yup.object().shape({
  nombreApellido: Yup.string()
    .matches(nameRegExp, 'Debe ingresar al menos un nombre y un apellido válidos')
    .required('Este campo es requerido'),
  correoElectronico: Yup.string()
    .matches(emailRegExp, 'Correo electrónico inválido')
    .required('Este campo es requerido'),
  fechaNacimiento: Yup.date().min(onehoundredYearsAgo, 'Debes ser menor a 100 años')
    .max(seventeenYearsAgo, 'Debe tener al menos 17 años')
    .required('Este campo es requerido'),
  CURP: Yup.string()
    .matches(CURPRegExp, 'Debe ingresar un CURP válido')
    .min(18, 'Ingrese un CURP con una longitud válida')
    .max(18, 'Ingrese un CURP con una longitud válida')
    .required('Este campo es requerido'),
});

const FormCInformation: React.FC<UserSend>= ({userS,onAccept,userID}) => { 
  const date=userS?.date_of_birth; 
  let dateuser=date?.split('-')[0]+'/'+date?.split('-')[1]+'/'+date?.split('-')[2].split('T')[0];
  if(dateuser==='undefined/undefined/undefined'){
    dateuser='01/01/2000'
  }
  const initialValues = {
    nombreApellido: userS.name,
    correoElectronico: userS.email,
    fechaNacimiento: new Date(dateuser),
    CURP: userS.CURP,
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
        handleSubmit(userID,values)
      }}
      enableReinitialize={true}
    >
      {({ setFieldValue }) => (
        <>
        <SForm>
          <Ddiv>
            <Udiv>
              <Slabel htmlFor="nombreApellido">Nombre y Apellido</Slabel>
              <Slabel><SAsterisk>*</SAsterisk></Slabel>
            </Udiv>
            <Tdiv style={{ marginLeft: '10%'}}>
              <SFieldName type="text" id="nombreApellido" name="nombreApellido" />
              <SErrorMessage name="nombreApellido" component="div" />
            </Tdiv>
          </Ddiv>

          <Ddiv>
            <Udiv>
              <Slabel htmlFor="correoElectronico">Correo Electrónico</Slabel>
            </Udiv>
            <Tdiv style={{ marginLeft: '11%'}}>
              <Slabel><SCorreo>{userS.email}</SCorreo></Slabel>
            </Tdiv>
          </Ddiv>
    
          <Ddiv>
            <Udiv>
              <Slabel htmlFor="fechaNacimiento">Fecha de Nacimiento</Slabel>
              <Slabel><SAsterisk>*</SAsterisk></Slabel>
            </Udiv>
            <Tdiv style={{ marginLeft: '7%'}}>
              <Field name="fechaNacimiento">
                {({ field }:FieldProps<Date>) => (
                  <SDatePicker
                    selected={field?.value}
                    onChange={date => setFieldValue(field?.name, date)}
                  />
                )}
              </Field>
              <SErrorMessage name="fechaNacimiento" component="div" />
            </Tdiv>
          </Ddiv>

          <Ddiv>
            <Udiv>
              <Slabel htmlFor="CURP">CURP</Slabel>
              <Slabel><SAsterisk>*</SAsterisk></Slabel>
            </Udiv>
            <Tdiv style={{ marginLeft: '24%'}}>
              <SFieldCURP type="text" id="CURP" name="CURP" />
              <SErrorMessage name="CURP" component="div" />
            </Tdiv>
          </Ddiv>

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

export default FormCInformation;