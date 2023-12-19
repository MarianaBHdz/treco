import styled from 'styled-components';

const ModalContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    `;

export const DesktopModalContainer = styled(ModalContainer)`
    
   position: absolute;
   float: left;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
    width:850px;
    height: 700px;
    font-size: 16px;
    `
export const Header = styled.h3`
    color: white;
    font-size: 25px;
    font-weight: 600;
    text-align: left;
    `

export const MobileModalContainer = styled(ModalContainer)`
    position : fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 200px;
    font-size: 26px;
`;

export const Message = styled.p`
    color: black;
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 0px;
    text-align: right;
    color: red;
    `;
export const CloseSign = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    font-size: 20px;
    
    &:before, &:after {
        position: absolute;
        left: 15px;
        top: 10px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: white;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;
const close_button_size = 20;
const CloseButton = styled.div`
    position: absolute;
    width: ${close_button_size}px;
    height: ${close_button_size}px;
    
    cursor: pointer;

    &>* {
        opacity: 1;
    }
    &:hover>* {
        opacity: 0.5;
    }
    `;
export const DesktopCloseButton = styled(CloseButton)`
    top: 0px;
    left: calc(97% - ${close_button_size/2}px);

`;
export const GreenHeader = styled.div`
    background-color: #739072;
    text-align: left;
    padding: 45px 50px;
    color: white;

    `;
export const MobileCloseButton = styled(CloseButton)`
    left: calc(100% - ${close_button_size}px);
    `;
