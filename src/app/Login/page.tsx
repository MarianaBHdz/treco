import React from 'react';
import { LoginCard } from '../components/LoginCard/logincard';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { SessionProvider, useSession } from '../components/context/SessionContext';

export default function Login(){
    return( 
        <div>
            <GoogleOAuthProvider clientId="830931273104-5185tsrliv9ikog1tq7a1q4cb2dagv4i.apps.googleusercontent.com">
                    <LoginCard titulo="Iniciar sesión" subtitulo="Inicia sesión en cuestión de segundos"/>
            </GoogleOAuthProvider>
        </div>
    )
}