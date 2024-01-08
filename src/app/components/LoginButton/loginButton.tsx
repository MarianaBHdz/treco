import './loginButton.css';
import React from 'react';

export interface LoginButtonProps{
    buttonText: string;
    onClickHandler: any;
}

export const LoginButton: React.FC<LoginButtonProps> = (props: LoginButtonProps) => (
    <div className='login-button-container' onClick={props.onClickHandler}>
        <div className="login-button-div">
            <img src="https://th.bing.com/th/id/R.33f3d423267251d78f9b7fd9c52c5083?rik=wEwElRU308cNFA&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2018%2f12%2fFree-Google-Logo.png&ehk=UUiYGS9KK60CP54BZ0LhG6V7%2bFngWgtphBrElZQTvVc%3d&risl=&pid=ImgRaw&r=0" 
            className="login-button-img" 
            alt="logo Google"/> {props.buttonText}
        </div>
    </div>
);