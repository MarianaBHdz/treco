import styled from 'styled-components';
import { Field, ErrorMessage,Form } from 'formik';

export const SForm = styled(Form)`
  
`;

export const Img2Edit = styled.img`
  width: 200px;
  height: 200px;
  padding: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 16px;
  margin-left: 60px;
  margin-right: 10px;
`;
export const SErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  position: absolute;
  left: 40px;

`;
export const SAsterisk = styled.span`
  color: red;
  font-weight: bold;
  margin-left: 1px;  
`;
export const SField = styled(Field)`
  width: 70%;
  height: auto;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 24px;

  margin-left: 30px;  
  margin-right: 10px;

`;

export const Slabel = styled.label`
  display: inline-block;
  width: 100%;
  margin-right: 10px;
  margin-left: 40px;
  margin-top: 27px;
`;

export const Sbutton = styled.button`
// create a green button that gets darker when you hover over it
background-color: #4CAF50;
border: none;
color: white;
padding: 10px 10px;
text-align: center;
text-decoration: none;

font-size: 20px;
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
width: 15%;
`;
export const Cbutton = styled.div`
// Create a red button that gets darker when you hover over it
background-color: #f44336;
border: none;
color: white;
padding: 10px 10px;
text-align: center;
text-decoration: none;
margin-left: 100px;
font-size: 20px;
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
width: 15%;
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
margin-left: 52px;
margin-right: auto;
width: 80%;
`;  
export const DivSend = styled.div`
display: block;
text-align: center;
position: absolute;
bottom: 70px;
width: 100%;
`;


export const Cdiv= styled.div`
  display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: -40px;

  `;
export const Ddiv = styled.div`
  flex: 1;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
`;
export const DdivLarge = styled(Ddiv)`
flex: 2;
`;
export const DivAdj= styled.div`
  display: flex;
  margin: 2px;
  position: relative;
`;