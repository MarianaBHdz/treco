'use client';

import './navBar.css'
import { FaBars } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import{useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { useSession} from '../context/SessionContext';
import  axios  from 'axios';

export default function NavBar(){
    const {sessionId,logout} = useSession();
    const [session, setSession] = useState(false);
    const [admin, setA] = useState(false);
    const [vendedor,setVen] = useState(false);
    const [cliente, setC] = useState(false);
    const [vende, setV] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>({});
    const [show1,setShow1] = useState(false);
    const [logoutClicked, setLogoutClicked] = useState(false);

    function isAdmin(userId:string){
        console.log("Buscando si el usuario es administrador: ",userId);
        axios.get('/api/User?user_id='+userId)
        .then((response) => {
            console.log('Respuesta completa: ', response.data);
            console.log('Rol del usuario: ', response.data.user.role);
            const userRole = response.data.user.role.toUpperCase();
            const nombre = response.data.user.name;
            if (userRole === 'ADMIN') {
                console.log('Es admin');
                setA(true);
            } else if (userRole === 'CONSUMER'){
                console.log('Es un cliente');
                setC(true);
                setA(false);
            }else{
                setVen(true);
                setA(false);
            }
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    function hasStore(userId: string) {
        console.log("Buscando si tiene tienda el usuario ",userId);
        axios.get('http://localhost:3000/api/User/store?user_id='+userId)
            .then((response) => {
              console.log('STORE CHECKING: ', response.data);
              if (response.data.user_store) {
                console.log('Es vendedor');
                setV(true);
              } else {
                setV(false);
              }
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
    }

    useEffect(() =>{
        if(sessionId){
            console.log("ID de sesión: ", sessionId);
            setSession(true);
            isAdmin(sessionId);
            hasStore(sessionId);
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

    useEffect(() => {
        axios.get('/api/User?user_id=' + sessionId)
            .then((response: any) => {
                console.log(response.data.user);
                setUser(response.data.user);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);

    const handleLogout = () => {
        // Set logoutClicked to true before calling logout
        setLogoutClicked(true);
        logout();
    };

    useEffect(() => {
        if (!sessionId && logoutClicked) {
            // Redirect to "/Inicio" only if logout was clicked
            setSession(false);
        }
    }, [sessionId, logoutClicked]);

    return (
        <header className="header">
            {session ? (
                
                admin ? (
                    <nav className="navbar-admin">
                        <div className="logo">
                            <img src="/logo.png" alt="Logo TRECO" onClick={() => { router.push('/adminHome'); }} className='logo-img' />
                        </div>
                        <div className="navbar-admin-text-container">
                            <h1 className="navbar-admin-h1">Bienvenido al perfil del administrador</h1>
                        </div>
                        <button className="nav-toggle" aria-label='Abrir menú'><FaBars /></button>
                        <ul className="nav-menu">
                            <li className="nav-menu-item">
                                <a className="nav-menu-link nav-link " onClick={() => { router.push('/adminCoupons'); }}>Administrar Eventos</a>
                            </li>
                            <li className="nav-menu-item">
                                <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/adminEvents'); }}>Administrar Cupones</a>
                            </li>
                        </ul>
                    </nav>
                //) : vendedor ? (
                    ) : vendedor ? (
                    <nav className="navbar">
                    <div className="logo">
                        <img src="/logo.png" alt="Logo TRECO" onClick={() => { router.push('/'); }} className='logo-img' />
                    </div>
                    <button className="nav-toggle" aria-label='Abrir menú'><FaBars /></button>
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link" onClick={() => { router.push('/clientEvents'); }}>Eventos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/clientStores'); }}>Tiendas Y Productos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/Ayuda'); }}>Ayuda</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/Conocenos'); }}>Conócenos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a  className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/MiTienda'); }}>Mi tienda</a>
                        </li>
                        <li className="nav-menu-item">
                            <button className="nav-icono" aria-label='icono'><FaCircleUser /></button>
                        </li>
                        <li className="nav-menu-item">
                            <button className="nav-button" onMouseOver={()=>setShow1(true)} onMouseOut={()=>setShow1(true)} onClick={() => {}}>
                                Hola {user?.name ? user?.name.split(' ')[0] : 'Usuario'} <IoIosArrowDown />
                            </button>
                            
                            {show1?
                            <div className='dropdownPerfil' onMouseOver={()=>setShow1(true)} onMouseOut={() => setShow1(false)}>
                                <div style={{marginTop:4}}>
                                    <span style={{marginLeft:20,fontSize:18, fontWeight:"bold", marginRight:20}}>Hola {user?.name ? user?.name.split(' ')[0] : 'Usuario'}</span><br/>
                                    <div style={{backgroundColor:"gray",height:2,width:"auto",marginLeft:5,marginBottom:7,marginTop:5,marginRight:5}}></div>
                                    <button className='ddbutton' onClick={() => {router.push('/clientInformation'); setShow1(false);}}>Mi Perfil</button><br/>
                                    <button className='ddbutton' onClick={() => {router.push('/clientCoupons'); setShow1(false);}}>Mis Cupones</button><br/>
                                    <button className='ddbutton' onClick={() => {router.push('/Inicio'); handleLogout(); setShow1(false); }} >Cerrar Sesión</button><br/>
                                </div>
                            </div>:null}
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/clientCoupons'); }}>Mis Cupones</a>
                        </li>
                    </ul>
                </nav>
                ) : (
                    <nav className="navbar">
                    <div className="logo">
                        <img src="/logo.png" alt="Logo TRECO" onClick={() => { router.push('/'); }} className='logo-img' />
                    </div>
                    <button className="nav-toggle" aria-label='Abrir menú'><FaBars /></button>
                    <ul className="nav-menu">
                    <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link" onClick={() => { router.push('/clientEvents'); }}>Eventos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/clientStores'); }}>Tiendas Y Productos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/Ayuda'); }}>Ayuda</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/Conocenos'); }}>Conócenos</a>
                        </li>
                        <li className="nav-menu-item">
                            <a  className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/MiTiendaInicio'); }}>Mi tienda</a>
                        </li>
                        <li className="nav-menu-item">
                            <button className="nav-icono" aria-label='icono'><FaCircleUser /></button>
                        </li>
                        <li className="nav-menu-item">
                            <button className="nav-button" onMouseOver={()=>setShow1(true)} onMouseOut={()=>setShow1(true)} onClick={() => {}}>
                                Hola {user?.name ? user?.name.split(' ')[0] : 'Usuario'} <IoIosArrowDown />
                            </button>
                            
                            {show1?
                            <div className='dropdownPerfil' onMouseOver={()=>setShow1(true)} onMouseOut={() => setShow1(false)}>
                                <div style={{marginTop:4}}>
                                    <span style={{marginLeft:20,fontSize:18, fontWeight:"bold", marginRight:20}}>Hola {user?.name ? user?.name.split(' ')[0] : 'Usuario'}</span><br/>
                                    <div style={{backgroundColor:"gray",height:2,width:"auto",marginLeft:5,marginBottom:7,marginTop:5,marginRight:5}}></div>
                                    <button className='ddbutton' onClick={() => {router.push('/clientInformation'); setShow1(false);}}>Mi Perfil</button><br/>
                                    <button className='ddbutton' onClick={() => {router.push('/clientCoupons'); setShow1(false);}}>Mis Cupones</button><br/>
                                    <button className='ddbutton' onClick={() => {router.push('/Inicio'); handleLogout(); setShow1(false); }} >Cerrar Sesión</button><br/>
                                </div>
                            </div>:null}
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link nav-link nav-menu-link_active" onClick={() => { router.push('/clientCoupons'); }}>Mis Cupones</a>
                        </li>
                    </ul>
                </nav>
                )
            ) : (
                <nav className="navbar">
                    <div className="logo">
                        <img src="/logo.png" alt="Logo TRECO" onClick={() => { router.push('/'); }} className='logo-img' />
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
                            <button className="nav-icono" onClick={() => { router.push('/Login'); }} aria-label='icono'><FaCircleUser /></button>
                        </li>
                        <li className="nav-menu-item">
                            <a href="/CreateAccount" className="nav-menu-link nav-link nav-menu-link_active">Crea Tu Cuenta</a>
                        </li>
                        <li className="nav-menu-item">
                            <a href="/Login" className="nav-menu-link nav-link nav-menu-link_active">Iniciar Sesión</a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}