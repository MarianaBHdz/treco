'use client';

import './navBar.css'
import { FaBars } from "react-icons/fa";
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
                {/* <img src="/logo.png" alt="Logo TRECO" className= "logo nav-link"/>  */}
                <a href="#" className="logo nav-link">Treco</a>
                <button className="nav-toggle" aria-label='Abrir menú'><FaBars /></button>
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link nav-menu-link_active">Eventos</a>
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
                        <a href="#" className="nav-menu-link nav-link">Icono</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link nav-menu-link_active">Crea Tu Cuenta</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link nav-menu-link_active">Iniciar Sesión</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}