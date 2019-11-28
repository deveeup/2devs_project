import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Ticket from '../components/Ticket';
import '../assets/styles/containers/Results.scss';

const Results = ({ tickets }) => {

  return (
    <div className='Results'>
      <h1>Resultados de la busqueda!</h1>
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

const mapStateToProps = state => {
  return {
    cart: state.cart,
    tickets: state.tickets,
    total: state.total,
  };
};

export default connect(mapStateToProps, null)(Results);
