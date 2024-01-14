'use client';
import React from 'react';
import styled from 'styled-components';
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSupabase } from '../../supabase-provider';
import DataViewS from '../DataViewS/DataViewS';
import { useSession } from '../context/SessionContext';

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
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  position: relative;
  width: 900px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  height: 690px;
`;

const CouponIcon = styled.div`
  width: 50px;
  display: flex;
  margin-left: 20px;
  margin-right: 25px;
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
  background-color: #739072;
  text-align: left;
  padding: 45px 50px;
  color: white;
  width: 900px;
`;

const GeneralDiv = styled.div`
  text-align: justify;
  padding: 10px;
  width: 900px;
`;
const GeneralDivDos = styled.div`
  text-align: left;
  padding: 10px;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumCouponsDiv = styled.div`
  display: flex;
  overflow: hidden;
  border: 3px solid #739072;
  border-radius: 20px;
  height: 103px;
  width: 350px;
  align-items: center;
  justify-content: center;
`;
const TextCoupons = styled.div`
  position: relative;
  float: left;
  height: auto;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;
const MsgCouponsText = styled.p`
  float: left;
  margin-left: 5vh;
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  height: 26px;
  letter-spacing: 1px;
  line-height: 26px;
`;
const GeneralP = styled.p`
  font-size: 20px;
`;

export const RecyclingIdeas: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();
  const { sessionId } = useSession();
  const { session } = useSupabase();
  const [user, setUser] = useState<any>();

  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }
  useEffect(() => {
    //const userId = session?.user?.id;
    axios.get('/api/User?user_id='+sessionId)
      .then((response: any) => {
        console.log(response.data.user);
        setUser(response.data.user);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [session]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <Header>
          <h2>Resultado del calculo de cupones</h2>
        </Header>
        
        <GeneralDiv>
          <GeneralP>¡Gracias por participar! <br/>En base a los datos que has ingresado podrías obtener: </GeneralP>
          <GeneralDivDos>
            <NumCouponsDiv>
              <CouponIcon><BsFillTicketPerforatedFill className='icon-coupon'/></CouponIcon>
              <TextCoupons>
                <DataViewS num={1} data={user?.unitM}/> <MsgCouponsText>CUPONES DISPONIBLES</MsgCouponsText>
              </TextCoupons>
            </NumCouponsDiv>
          </GeneralDivDos>
          <GeneralP>Participa en el próximo evento para obtener tus cupones, consulta las fechas y detalles en el apartado de ‘Eventos’. <br/> 
Te damos algunas ideas creativas de reciclaje para el material que ingresaste:</GeneralP>
        </GeneralDiv>
      </ModalContent>
    </ModalOverlay>
  );
};
