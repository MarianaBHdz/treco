import styled from 'styled-components';
import { Field, ErrorMessage,Form } from 'formik';

export const SForm = styled (Form)`
    width: 100%;
    height: auto;
    margin-top: 10px;
`;

export const Ddiv = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
`;

export const ImgEdit = styled.img`
  width: 200px;
  height: auto;
  box-sizing: border-box;
`;

export const Udiv = styled.div`
    display: flex;
    font-size: 18px;
    justify-content: right;
    align-items: center;
    width: 45%;
    height: auto;
    margin-right: 10px;
`;

export const Tdiv = styled.div`
    font-size: 18px;
    margin-left: 10px;
    width: 55%;
    height: auto;

`;

export const Slabel = styled.label`
  width: auto;
`;

export const SAsterisk = styled.span`
  color: red;
  font-weight: bold;
  margin-left: 1px;  
`;

export const SField = styled(Field)`
  width: 50%;
  height: 45%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 4px;
  display:flex;
  justify-content: left;
  align-items: left;
  font-size: 17px;
`;

export const SErrorMessage = styled(ErrorMessage)`
  color: red;
  display: flex;
  text-align: center;
  font-size: 12px;
  width: 100%;
`;

export const DivSend = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 20px;
`;

export const Sbutton = styled.button`
  // create a green button that gets darker when you hover over it
  border-radius: 5px;
    padding: 8px 10px;
    margin: 0px 40px;
    font-size: 18px;
    background-color: #739072;
    color: #ECE3CE;
    border: 3px solid #739072;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
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