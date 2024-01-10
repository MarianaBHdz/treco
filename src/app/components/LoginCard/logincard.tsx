'use client';

import './logincard.css';
import React from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import { useRouter } from 'next/navigation';

export interface LoginCardProps {
    titulo:string;
    subtitulo:string;
}

export const LoginCard: React.FC<LoginCardProps> = ({titulo,subtitulo}) => {
  const { sessionId, setSessionId } = useSession();
  const router = useRouter();
  
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try{
        const userInfo= await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers:{
            Authorization: `Bearer ${response.access_token}`,
          },
        }
      );
      
      const user = {
        id: userInfo.data.sub|| '', 
        user_metadata: {
          full_name: userInfo.data.name, 
          avatar_url: userInfo.data.picture,
          CURP: '',
          material: 0,
          numCoupons: 0,
          quantityM: "",
          unitM: 0,
        },
        email: userInfo.data.email,
      };

    
      
      await axios.post(`/api/User?user_id=${userInfo.data.sub}`, {user} );

      setSessionId(userInfo.data.sub);
      if(userInfo.data.sub === "104967533410435516052"){
        router.push('/adminHome');
        console.log("Es admin", userInfo.data.sub)
      }else{
        router.push('/Inicio');
        console.log("Es cliente", userInfo.data.sub)
      }
      console.log("ID de sesión: ", sessionId)
      }catch (err){
        console.log(err);
      }
    }
  });

  const logout = () =>{
    googleLogout();
    setSessionId(null);
  }
    
  return(
    <div className="login-container">
        <div className="login-card">
            <h1 className="login-card-h1">{titulo}</h1>
            <h2 className="login-card-h2">{subtitulo}</h2>
            <div className="login-card-div-button">
                    <img src="https://th.bing.com/th/id/R.33f3d423267251d78f9b7fd9c52c5083?rik=wEwElRU308cNFA&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2018%2f12%2fFree-Google-Logo.png&ehk=UUiYGS9KK60CP54BZ0LhG6V7%2bFngWgtphBrElZQTvVc%3d&risl=&pid=ImgRaw&r=0" alt="logo" className="login-card-img" />
                    <button className="login-card-button" onClick={() => login()}>Usar Google</button>
            </div>
        </div>
    </div>
    )
};