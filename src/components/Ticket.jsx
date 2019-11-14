import React from "react";
import "../assets/styles/components/Ticket.scss";

const Ticket = props => (
  <div className="Ticket">
    <h1>FROM > TO</h1>
    <span>Salida: Airport_from</span>
    <span>Llegada: Airport_to</span>
    <span>Tipo de vuelo: Ejecutivo</span>
    <span>Hora de salida: hour_from</span>
    <span>Hora de llegada: hour_to</span>
    <span>Tickets disponibles: 99</span>
    <h2>$ 300,000</h2>
    <button>Comprar</button>
  </div>
);

export default Ticket;
