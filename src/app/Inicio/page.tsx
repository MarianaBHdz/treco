import './page.css';
import Carousel from "../components/Carousel/carousel"
import InicioCard from "../components/InicioCard/inicioCard"
import Bienvenida from '../images/Bienvenida.png';
import Mundo from '../images/Mundo.png';
import Cupones from '../images/Cupones.png';
import Admin from '../images/Admin.png';

const imgCarousel= [
    "https://th.bing.com/th/id/OIP.GmJVHfwlpmGFs1O4TlX50QHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.GmJVHfwlpmGFs1O4TlX50QHaE8?rs=1&pid=ImgDetMain"
]

export default function Inicio(){
    const isAdmin = false;
    return (
        <div className="div-maincontainer-inicio">
            {
                isAdmin?
                <div className="div-container-admin-inicio">
                    <div className="div-inicio-img-admin">
                        <img src={Admin.src} alt="Bienvenida Admin" className="inicio-img-admin" />
                    </div>
                    <div className="inicio-div-p">
                        <p className="p-inicio-admin">¡Hola! Bienvenido al perfil del administrador <br/> Aquí podrás administrar los eventos y los cupones de los clientes.</p>
                    </div>
                </div>
                :
                <div className='div-container-inicio'>
                    <div className="div-inicio-carousel">
                        <img src={Bienvenida.src} alt="Bienvenida" className="inicio-img" />
                        {/*<Carousel imagenes={imgCarousel}/>*/}
                    </div>
                    <div className="inicio-div-h1">
                        <InicioCard 
                        imagen={Mundo}
                        descimg="Mundo"
                        tittle="Bienvenido a TRECO"
                        text="Crea un perfil y descubre cómo intercambiar tus desechos por productos locales
                        ¡Haz una elección ecoamigable!"/>
                    </div>
                    <div className="inicio-div-h1">
                        <InicioCard 
                        imagen={Cupones}
                        descimg="Cupones"
                        tittle="Eco-cupón"
                        text="Los ecocupones te ayudarán a saber el valor de su desechos
                        ¡Recicla, canjea y vive con estilo TRECO!"/>
                    </div>
                </div>
            }
        </div>
      )
}