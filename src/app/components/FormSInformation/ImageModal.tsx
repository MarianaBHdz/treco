import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const IDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// image must be only a circle
export const Img2Edit = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const StyledErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const LFDiv = styled.div`
  width:auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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
`;

const ConfirmationModal = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 5px;
  width: auto;
`;

const SLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 100%;

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #739072;
  font-size: 20px;
  margin-top: 10px;
  &:focus {
    outline: none;
    border: 1px solid #3A4D39;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const ConfirmationButton = styled.button`
    margin-left: 10px;
    border-radius: 5px;
    padding: 8px 10px;
    margin: 0px 40px;
    font-size: 18px;
    background-color: #739072;
    color: #ECE3CE;
    border: 3px solid #739072;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
  &:hover {
    background-color: rgba(79, 111, 82, 0.67);
    border: 3px solid rgba(79, 111, 82, 0.67);
  }
`;
// grey close sign at the right with css lines and hovers when hover 
const CloseSign = styled.div`
  position: relative;
  top: 0px;
  margin-left: 90%;
  margin-top: 1%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color:grey;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover:before,
  &:hover:after {
    background-color: red;
  }
`;

function isValidURL(string: string) {
  const res = string.match(/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i);
  return (res !== null);
};

function isValidImage(url: string, callback: (v: boolean) => void) {
  let img = new Image();
  img.onload = function() { callback(true); };
  img.onerror = function() { callback(false); };
  img.src = url;
}
interface ImageModalProps {
  onClose: () => void;
  imgurl: string;
  onImageUrlChange: (url: string) => void;
}

// ... (same as before)

const ImageModal: React.FC<ImageModalProps> = ({ onClose, imgurl, onImageUrlChange }) => {
  const [isValid, setIsValid] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState(imgurl);  // renamed to tempImageUrl for clarity

  useEffect(() => {
    if (isValidURL(tempImageUrl)) {
      isValidImage(tempImageUrl, setIsValid);
    } else {
      setIsValid(false);
    }
  }, [tempImageUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempImageUrl(e.target.value);
  };

  const changeImage = () => {
    if (isValid) {
      onImageUrlChange(tempImageUrl);
      onClose();
    } 
  };

  return (
    <ConfirmationContainer>
      <ConfirmationModal>
        <CloseSign onClick={onClose} />
        <IDiv>
  {isValid && <Img2Edit src={tempImageUrl} />}
  {!isValid && <StyledErrorMessage>Imagen invalida</StyledErrorMessage>}
</IDiv>
        <LFDiv>
          <SLabel>
            Agregue el link de la imagen
          </SLabel>
          <SField value={tempImageUrl} onChange={handleChange} >
          </SField>
        </LFDiv>
        <ButtonContainer>
          <ConfirmationButton onClick={changeImage}>CAMBIAR</ConfirmationButton>
        </ButtonContainer>
      </ConfirmationModal>
    </ConfirmationContainer>
    
  );
};

export default ImageModal;

