import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
interface ModalProps {
    // onBackdropClick: () => void;
    children: React.ReactNode;
}

const Overlay = styled.div`
background-color: rgba(0,0,0,0.5);
position: fixed;
height: 100%;
width: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
`;
const Modal: React.FC<ModalProps> = ({children}) => {
    return ReactDOM.createPortal(<Overlay 
        // onClick={onBackdropClick}
    >
        <div onClick={e=>e.stopPropagation()}>{children} </div>
            
        </Overlay>,document.getElementById('modal-root')!); 
        // not a safe operation, but we know that the element exists
    }
export default Modal;