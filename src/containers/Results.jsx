import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Ticket from '../components/Ticket';
import '../assets/styles/containers/Results.scss';

const Results = ({ tickets }) => {

  return (
    <div className='Results'>
      <h1>Resultados de la busqueda</h1>
      <div className='Results-container'>
        {
          tickets.map(ticket => {
            return (
              <Ticket
                key={ticket.id_ticket}
                {...ticket}
              />
            );
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
    user_tickets: state.user_tickets,
  };
};

export default connect(mapStateToProps, null)(Results);
