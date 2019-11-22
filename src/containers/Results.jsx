import React, { useState, useEffect } from 'react';
import Ticket from '../components/Ticket';
import '../assets/styles/containers/Results.scss';
const Results = (props) => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/tickets')
      .then(response => response.json())
      .then(data => setTickets(data))
  }, []);
  console.log(tickets);
  return (
    <div className='Results'>
      <h1>Resultados de la busqueda</h1>
      <div className='Results-container'>
        {
          tickets.map(ticket => {
            return (
              <Ticket
                key={ticket.id_ticket}
                from={ticket.from}
                to={ticket.to}
                air_type={ticket.air_type}
                hour_from={ticket.hour_from}
                hour_to={ticket.hour_to}
                tickets={ticket.tickets}
                title={ticket.title}
                price={ticket.price}
                img={ticket.img}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Results;
