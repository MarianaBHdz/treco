import React from 'react';
import styled from 'styled-components';
import {SuccessPerfil} from '../confirmations/SuccessPerfil';


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
  background-color: rgba(236, 227, 206, 1);
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
`;

const ConfirmationText = styled.p`
  font-size: 18px;
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
  font-size: 18px;
  &:first-child {
    background-color: green;
  }

  &:last-child {
    background-color: red;
  }
`;

export interface ConfirmationConfirmationProps {
  onClose: () => void;
  onAccept: () => void;
  confirmationMessage: string;
  successMessage: string;
}

const ConfirmationConfirmation: React.FC<ConfirmationConfirmationProps> = ({ onClose, onAccept, confirmationMessage, successMessage}) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const handleSucces = () => {
    setIsSuccessModalOpen(true);
  };

  return (
    <ConfirmationContainer>
      <ConfirmationModal>

        <ConfirmationText>
            {confirmationMessage} 
        </ConfirmationText>
        <ButtonContainer>
        <ConfirmationButton onClick={handleSucces}>ACEPTAR</ConfirmationButton>
        <ConfirmationButton onClick={onClose}>CANCELAR</ConfirmationButton>
          
        </ButtonContainer>
      </ConfirmationModal>
      {isSuccessModalOpen && <SuccessPerfil onClose={() => {setIsSuccessModalOpen(false);onAccept();window.location.reload();}} successMessage={successMessage}/>}
    </ConfirmationContainer>



  );
};

export default ConfirmationConfirmation;
