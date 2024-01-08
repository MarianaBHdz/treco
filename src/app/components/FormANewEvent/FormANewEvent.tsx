import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SAsterisk, SCorreo, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Udiv, Tdiv,SDatePicker,SFieldName,SFieldNumber,SField,SFieldCURP} from './FormANewEvent.style';
import {SuccessPerfil} from '../confirmations/SuccessPerfil';
import CancelConfirmation from '../confirmations/CancelConfirmation';
import axios from 'axios';

export interface Event {
  name: string;
  start_date?: string;
  finish_date?: string;
  start_schedule?: string;
  finish_schedule?: string;
}

export interface EventSend {
  userID: string | undefined;
  eventS: Event;
  onAccept: () => void;
}



// Current date minus 17 years
const seventeenYearsAgo = new Date();
seventeenYearsAgo.setFullYear(seventeenYearsAgo.getFullYear() - 23);
const onehoundredYearsAgo = new Date();
onehoundredYearsAgo.setFullYear(onehoundredYearsAgo.getFullYear() - 100);

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Este campo es requerido'),
  start_date: Yup.date()
    .min(onehoundredYearsAgo, 'Debes ser menor a 100 años')
    .max(seventeenYearsAgo, 'Debe ser del año en curso en adelante')
    .required('Este campo es requerido'),
  finish_date: Yup.date()
    .min(onehoundredYearsAgo, 'Debes ser menor a 100 años')
    .max(seventeenYearsAgo, 'Debe ser del año en curso en adelante')
    .required('Este campo es requerido'),
  start_schedule: Yup.string()
    .required('Este campo es requerido'),
  finish_schedule: Yup.string()
    .required('Este campo es requerido'),
  
});

const FormCInformation: React.FC<EventSend>= ({eventS,onAccept,userID}) => { 
  const dateS=eventS?.start_date; 
  let datestart=dateS?.split('-')[0]+'/'+dateS?.split('-')[1]+'/'+dateS?.split('-')[2].split('T')[0];
  if(datestart==='undefined/undefined/undefined'){
    datestart='01/01/2023'
  }
  const dateF=eventS?.finish_date; 
  let datefinish=dateF?.split('-')[0]+'/'+dateF?.split('-')[1]+'/'+dateF?.split('-')[2].split('T')[0];
  if(datefinish==='undefined/undefined/undefined'){
    datefinish='01/01/2023'
  }
  const initialValues = {
    nombreApellido: eventS.name,
    start_date: new Date(datestart),
    finish_date: new Date(datefinish),
    start_schedule: eventS.start_schedule,
    finish_schedule: eventS.finish_schedule,
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
              <Slabel htmlFor="name">Nombre del evento</Slabel>
              <Slabel><SAsterisk>*</SAsterisk></Slabel>
            </Udiv>
            <Tdiv style={{ marginLeft: '10%'}}>
              <SFieldName type="text" id="name" name="name" />
              <SErrorMessage name="name" component="div" />
            </Tdiv>
          </Ddiv>

          <Ddiv>
            <Udiv>
              <Slabel htmlFor="correoElectronico">Correo Electrónico</Slabel>
            </Udiv>
            <Tdiv style={{ marginLeft: '11%'}}>
              <Slabel><SCorreo>{eventS.email}</SCorreo></Slabel>
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