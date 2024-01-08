import { Formik, Field, ErrorMessage,FieldProps} from 'formik';
import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import { SForm, Slabel, SField, SErrorMessage ,Cbutton,Sbutton,DivSend,Ddiv,Ibutton,DdivLarge,DivAdj,Cdiv,SAsterisk} from './FormCCoupons.style';
import {SuccessPerfil} from '../confirmations/SuccessPerfil';
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

        // Obtenemos los valores del formulario
        const { unitM, quantityM, material } = values;

        // Calculamos el valor de numCoupons en base a los valores del formulario
        let calculatedNumCoupons = 0;

        if (unitM == 1) {
          // Si ambos unitM y quantityM tienen valores
          calculatedNumCoupons = unitM * parseFloat(quantityM);

          // Dependiendo del valor de material, hacemos otra multiplicación
          if (material === 1) {
            // Si el material es 1 (Aluminio)
            calculatedNumCoupons *= 2;
          } else if (material === 2) {
            // Si el material es 2 (Botellas de vidrio)
            calculatedNumCoupons *= 3;
          }
          // Puedes agregar más condiciones para otros materiales según sea necesario
        }else{
          
        }

        // Asignamos el valor calculado a numCoupons en los valores del formulario
        const updatedValues = { ...values, numCoupons: calculatedNumCoupons };

        // Llamamos a la función handleSubmit con los valores actualizados
        handleSubmit(userID, updatedValues);

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