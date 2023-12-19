import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  border: 7px solid rgb(84,166,0);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  position: relative;
  width: 400px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  height: 300px;
`;

const SuccessIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(84,166,0);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    background: white;
  }

  &::before {
    width: 2px;
    height: 22px;
    transform: rotate(30deg);
    top: 30%;
    left: 55%;
  }

  &::after {
    width: 2px;
    height: 12px;
    transform: rotate(150deg);
    top: 49%;
    left: 40%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top:18px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    width: 2px;
    background-color: grey;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover::before,
  &:hover::after {
    background-color: red;
  }
`;

const Header = styled.div`
  // move it down a bit
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  width: 100%;
  h2 {
    font-size: 35px;

  }
`;

export const SuccessPerfil: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <Header>
          <SuccessIcon />
          <h2>¡Listo!</h2>
        </Header>
        <p>Se ha agregado exitosamente  el producto a tu tienda </p>
      </ModalContent>
    </ModalOverlay>
  );
};
