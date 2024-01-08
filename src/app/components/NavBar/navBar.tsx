'use client';

import './navBar.css'
import { FaBars } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import{useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '../context/SessionContext';

export default function NavBar(){
    const {sessionId} = useSession();

    useEffect(() =>{
        if(sessionId){
            console.log("ID de sesión: ", sessionId);
        }
    },[sessionId]);

    const router = useRouter();
    //Menu lateral
    useEffect(() => {
        const handleClick = () => {
          const navMenu = document.querySelector('.nav-menu');
          navMenu?.classList.toggle('nav-menu_visible');
          if(navMenu?.classList.contains("nav-menu_visible")){
            navToggle?.setAttribute("aria-label","Cerrar menú");
          } else {
            navToggle?.setAttribute("aria-label","Abrir menú");
          }
        };
    
        const navToggle = document.querySelector('.nav-toggle');
        navToggle?.addEventListener('click', handleClick);

        // Limpia el evento cuando el componente se desmonta
        return () => {
            navToggle?.removeEventListener('click', handleClick);
        };
        
    }, []);

    const isAdmin = false;
    const session = true;
    const isSeller = false;

    return(
        <header className="header">
            {
            isAdmin?
            <nav className="navbar-admin">
                <div className="logo">
                    <img src="/logo.png" alt="Logo TRECO" onClick={() => {router.push('/');}} className='logo-img'/>
                </div>
                <div className="navbar-admin-text-container">
                    <h1 className="navbar-admin-h1">Bienvenido al perfil del administrador</h1>
                </div>
                <button className="nav-toggle" aria-label='Abrir menú'><FaBars /></button>
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <a href="/adminCoupons" className="nav-menu-link nav-link ">Administrar Eventos</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="/adminEvents" className="nav-menu-link nav-link nav-menu-link_active">Administrar Cupones</a>
                    </li>
                </ul>
            </nav>
                :                
                <nav className="navbar">
                    <div className="logo">
                        <img src="/logo.png" alt="Logo TRECO" onClick={() => {router.push('/');}} className='logo-img'/>
                    </div>
                    <button className="nav-toggle" aria-label='Abrir menú'><FaBars /></button>
                    <ul className="nav-menu">
                        
                        <li className="nav-menu-item">
                            <a href="/clientEvents" className="nav-menu-link nav-link ">Eventos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a href="/clientStores" className="nav-menu-link nav-link nav-menu-link_active">Tiendas Y Productos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a href="/Ayuda" className="nav-menu-link nav-link nav-menu-link_active">Ayuda</a>
                        </li>
                        <li className="nav-menu-item">
                            <a href="/Conocenos" className="nav-menu-link nav-link nav-menu-link_active">Conócenos</a>
                        </li>
                        <li className="nav-menu-item">
                            <button className="nav-icono" onClick={() => {router.push('/Login');}} aria-label='icono'><FaCircleUser /></button>
                        </li>
                        <li className="nav-menu-item">
                            <a href="/CreateAccount" className="nav-menu-link nav-link nav-menu-link_active">Crea Tu Cuenta</a>
                        </li>
                        <li className="nav-menu-item">
                            <a href="/Login" className="nav-menu-link nav-link nav-menu-link_active">Iniciar Sesión</a>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}