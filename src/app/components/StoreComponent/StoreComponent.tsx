import './StoreComponent.css';
import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

interface Store {
  id: number;
  business_name: string;
  avatar_url: string;
}

export interface TiendacomponenteProps {
  className?: string;
}

export const StoreComponent: React.FC<TiendacomponenteProps> = ({ className = '' }) => {

  // Estado para almacenar los datos de las tiendas
  const [tiendadata, setTiendaData] = useState<Store[]>([]);
  const router = useRouter();
  useEffect(() => {
    // Obtener los datos de las tiendas desde la API
    fetchData();
  }, []);

  // Función para obtener los datos de las tiendas desde la API
  const fetchData = async () => {
    try {
      // Realizar la solicitud a la API para obtener los datos de las tiendas
      const response = await fetch('http://localhost:3000/api/Stores');
      const data = await response.json();
      console.log("Respuesta del servidor: ", response);
      console.log("Arreglo de datos", data);
      if (response.ok) {
        // Almacenar los datos de las tiendas en el estado
        setTiendaData(data.store);
        console.log("Arreglo de datos", data.store);
      } else {
        console.error('Error fetching data:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="tiendacomponente-container">
      {tiendadata.map((store) => (
        <div key={store.id} className={`espacio`}>
            <button className={`tienda`} onClick={() => {router.push('/clientProducts?id='+store.id);}}><img src={store.avatar_url} className="imagentienda" /></button>
          <div className={`textotienda`}>
            {store.business_name}
          </div>
        </div>
      ))}
    </div>
  );
};