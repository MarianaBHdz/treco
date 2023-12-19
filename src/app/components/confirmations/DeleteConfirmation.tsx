import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Agregar un valor alto para que aparezca por encima de otros elementos */
`;

const ConfirmationModal = styled.div`
  background-color: rgb(255, 223, 187);
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
`;

const ConfirmationText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ConfirmationButton = styled.button`
  margin-left: 10px;
  padding: 8px 20px;
  width: 150px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  &:first-child {
    background-color: green;
  }

  &:last-child {
    background-color: red;
  }
`;

export interface DeleteConfirmationProps {
  onClose: () => void;
  onAccept: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onClose, onAccept }) => {

  return (
    <ConfirmationContainer>
      <ConfirmationModal>

        <ConfirmationText>
          ¿Está seguro que
          <br></br> 
          quiere eliminar el
          <br></br>
           producto?
        </ConfirmationText>
        <ButtonContainer>
        <ConfirmationButton onClick={onAccept}>ACEPTAR</ConfirmationButton>
          <ConfirmationButton onClick={onClose}>CANCELAR</ConfirmationButton>
          
        </ButtonContainer>
      </ConfirmationModal>
    </ConfirmationContainer>



  );
};

export default DeleteConfirmation;
