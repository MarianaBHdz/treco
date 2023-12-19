import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { Field, ErrorMessage,Form } from 'formik';
export const SForm = styled(Form)`
  // create 
  margin-top: 1%;
  margin-left: 1%;
  justify-content: center;
  justify-items: center;
`;
export const SField = styled(Field)`
  justify-content: right;
  align-items: right;
  height: 45%;
`;
export const SFieldName = styled(Field)`
  width: 160%;
  height: 45%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 4px;
  justify-content: left;
  align-items: left;
  font-size: 17px;
`;
export const SFieldCURP = styled(Field)`
  width: 160%;
  height: 45%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 4px;
  justify-content: left;
  align-items: left;
  font-size: 17px;
`;
export const SFieldNumber = styled(Field)`
  width: 78%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 4px;
  justify-content: left;
  align-items: left;
`;
export const SErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;



export const Slabel = styled.label`
  margin-top: 6px;
  margin-bottom: 40px;
  display: inline-block;
  margin-left: 0px;  
`;

export const SAsterisk = styled.span`
  color: red;
  font-weight: bold;
  margin-left: 1px;  
`;

export const SCorreo = styled.span`
  margin-left: 0px;  
  margin-right: 10px;
`;

export const Sbutton = styled.button`
  // create a green button that gets darker when you hover over it
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;

  font-size: 18px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #3e8e41;
    color: white;
  }

  display: inline-block;
  margin-left: auto;
  margin-right: 10px;
  width: 20%;
`;
export const Cbutton = styled.div`
  // Create a red button that gets darker when you hover over it
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;

  font-size: 18px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #da190b;
    color: white;
  }
  display: inline-block;
  margin-left: 10px;
  margin-right: auto;
  width: 20%;
`;  
export const DivSend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const Ddiv = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: left;
  align-items: left;
  margin-left: 15%;
`;

export const Udiv = styled.div`
  justify-content: left;
  align-items: left;
`;

export const Tdiv = styled.div`
  justify-content: left;
  align-items: left;
  width: 30%;
`;
export const SDatePicker = styled(DatePicker)`
  width: 70%;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 4px;
  justify-content: left;
  align-items: left;
  font-size: 17px;

`;
export const Ibutton = styled.div`

  // Create a red button that gets darker when you hover over it
  background-color: #ffffff;
  color: grey;
  padding: 10px 10px;
  text-align: center;
  border: 1px solid grey;
  font-size: 16px;

  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: grey;
    color: white;
  }
  display: inline-block;
  margin-left: 60px;
  margin-right: auto;
  width: 80%;
`;
export const Cdiv= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -40px;
`;
export const DdivLarge = styled(Ddiv)`
  flex: 2;
`;
export const DivAdj= styled.div`
  display: flex;
  margin: 2px;
  
  position: relative;
`;