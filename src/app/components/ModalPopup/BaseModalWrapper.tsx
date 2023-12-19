import React, { MouseEventHandler,  ReactNode } from 'react';
import Modal from './Modal';
import { Header, Message,CloseSign,GreenHeader} from './ModalPopup.styles';
import { Container } from 'postcss';

export interface BaseModalWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    header: string;
    message?: string;
    content?: ReactNode;
}
interface ComponentsProps {
    ContainerComponent : React.ComponentType<{children?: React.ReactNode;}>;
    CloseButtonComponent: React.ComponentType<{
        onClick? : MouseEventHandler<any>
    children?: React.ReactNode;
    }>;
    
}

type Props= BaseModalWrapperProps & ComponentsProps;


const BaseModalWrapper: React.FC<Props> = ({content,isModalVisible, header,message,ContainerComponent}) => {
    if (!isModalVisible) return null;
    return (

    <Modal >

    <ContainerComponent>
        <GreenHeader>
            <Header>
                {header}
            </Header>
        </GreenHeader>
    
        {message && <Message>{message}</Message>}
        {content}      
    </ContainerComponent>

    </Modal>
);
}
export default BaseModalWrapper;