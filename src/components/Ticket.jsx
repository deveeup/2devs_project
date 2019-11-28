import React from "react";
import "../assets/styles/components/Ticket.scss";
import { Link } from 'react-router-dom'
const Ticket = props => (
  <div className="Ticket">
    <img src={props.img} />
    <h1>{props.title}</h1>
    <span>Salida: {props.from}</span>
    <span>Llegada: {props.to}</span>
    <span>Tipo de vuelo: {props.air_type}</span>
    <span>Hora de vuelo: {props.hour_from} - {props.hour_to}</span>
    <div className="Ticket-actionContainer">
      <h2>$ {props.price}</h2>
      <Link to={{ pathname: '/ticket', state: { ticket: { ...props } } }}>Ver más</Link>
    </div>
  </div>
);

export default Ticket;
