import './EventAdmin.css';
import React, { PropsWithoutRef } from 'react';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

interface EventAdmin{
  eventname:string;
  eventstartdate:string;
  eventfinishdate:string;
  eventstarthour:string;
  eventfinishhour:string;
  eventaddress: string;

}

function EventAdmin (props:EventAdmin){
  return(
    <div className='event-container'>
      <div className='text-container'>
        <div className='text-name-event'>{props.eventname}</div>

        <div className='text-individual'>
          <div className='text-name'>Fecha</div>
          <div className='text-information'>{props.eventstartdate}</div>
          <div className='text-name-a'>a</div>
          <div className='text-information'>{props.eventfinishdate}</div>
        </div>
        <div className='text-individual'>
          <div className='text-name'>Horario</div>
          <div className='text-information'>{props.eventstarthour}</div>
          <div className='text-name-a'>a</div>
          <div className='text-information'>{props.eventfinishhour}</div>
        </div>
        <div className='text-individual'>
          <div className='text-name'>Lugar</div>
          <div className='text-information'>{props.eventaddress}</div>
        </div>
      </div>

      <div className='icon-container'>
        <div className='icon-edit-div'><BsFillPencilFill className='icon-edit'/></div>
        <div className='icon-delete-div'><BsFillTrashFill className='icon-delete'/></div>
      </div>
    </div>
  );
}

export default EventAdmin;