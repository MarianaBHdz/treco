import React from 'react';
import { LoginCard } from '../components/LoginCard/logincard';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function CreatAccount(){
    return( 
        <div>
            <GoogleOAuthProvider clientId="830931273104-5185tsrliv9ikog1tq7a1q4cb2dagv4i.apps.googleusercontent.com">
                <LoginCard titulo="Crea tu sesión" subtitulo="Crea una sesión nueva en Treco" accountstatus={true}/>
            </GoogleOAuthProvider>
        </div>
    )
}