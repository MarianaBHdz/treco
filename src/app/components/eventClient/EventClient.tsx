import './EventClient.css';
import React, { PropsWithoutRef } from 'react';
import { BiTime } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { BiCalendarEvent } from "react-icons/bi";


interface EventClient{
  eventname:string;
  eventstartdate:string;
  eventfinishdate:string;
  eventstarthour:string;
  eventfinishhour:string;
  eventaddress: string;

}

function EventClient (props:EventClient){
  return(
    <div className='event-container-eventc'>
      <div className='date-container-eventc'>
        <div className='date-info-eventc'>{props.eventstartdate}</div>
        <div className='date-separator'>-</div>
        <div className='date-info-eventc'>{props.eventfinishdate}</div>
      </div>
      <br/>
      <div className='event-data-container-eventc'>
        <div className='icon-container-eventc'>
          <div className='icon-div-eventc'><BiCalendarEvent className='icon-event'/></div>
        </div>
        <div className='mainevent-content'>
          <div className='name-eventc'>{props.eventname}</div>
          <div className='data-info-eventc'>
            <div className='icon-div-eventc'><BiTime className='icon-clock'/></div>
            <p className='data-name-eventc'>Horario</p>
            <p className='data-eventc'>{props.eventstarthour} a {props.eventfinishhour}</p>
          </div>
          <br/>
          <div className='data-info-eventc'>
            <div className='icon-div-eventc'><BiMap className='icon-location'/></div>
            <p className='data-name-eventc'>Ubicación</p>
            <p className='data-eventc'>{props.eventaddress}</p>
          </div>
        </div>    
      </div>

    </div>
  );
}

export default EventClient;