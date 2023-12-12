import Carousel from "../components/Carousel/carousel"

const imgCarousel= [
    "https://th.bing.com/th/id/OIP.GmJVHfwlpmGFs1O4TlX50QHaE8?rs=1&pid=ImgDetMain"
]

export default function Inicio(){
    return (
        <div>
            <Carousel imagenes={imgCarousel}/>
        </div>
      )
}