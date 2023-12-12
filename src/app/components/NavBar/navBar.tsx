'use client';

import './navBar.css'
import { FaBars } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import{useEffect} from 'react';

export default function NavBar(){
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

    return(
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src="/logo.png" alt="Logo TRECO" className='logo-img'/>
                </div>
                <button className="nav-toggle" aria-label='Abrir menú'><FaBars /></button>
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link ">Eventos</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link nav-menu-link_active">Tiendas Y Productos</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link nav-menu-link_active">Ayuda</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link nav-menu-link_active">Conócenos</a>
                    </li>
                    <li className="nav-menu-item">
                        <button className="nav-icono" aria-label='icono'><FaCircleUser /></button>
                    </li>
                    <li className="nav-menu-item">
                        <a href="/CreateAccount" className="nav-menu-link nav-link nav-menu-link_active">Crea Tu Cuenta</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="/Login" className="nav-menu-link nav-link nav-menu-link_active">Iniciar Sesión</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}