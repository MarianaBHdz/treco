'use client';

import './logincard.css';
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export interface LoginCardProps {
    titulo:string;
    subtitulo:string;
    accountstatus: boolean;
}

export const LoginCard: React.FC<LoginCardProps> = ({titulo,subtitulo,accountstatus}) => {
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
        console.log(userInfo);
      }catch (err){
        console.log(err);
      }
    }
  });
      
    
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