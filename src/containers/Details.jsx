import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../assets/styles/containers/Details.scss';
const Details = (props) => {
  const ticket = props.location.state.ticket;
  const user = props.user;
  return (
    <>
      <h1>Detalles del ticket</h1>
      <div className='Details'>
        <div className='Details-ticket'>
          <img src={ticket.img} alt={ticket.title} />
          <div>
            <h2>{ticket.title}</h2>
            <span>Fecha: {ticket.date}</span>
            <span>Aerolinea: {ticket.airline}</span>
            <span>Salida: {ticket.from} - {ticket.airport_from} - {ticket.hour_from} hrs</span>
            <span>Llegada: {ticket.to} {ticket.airport_to} - {ticket.hour_to} hrs.</span>
            <span>Tickets disponibles: {ticket.tickets}</span>
            <span>Ticket Nro: <b>{ticket.id_ticket}</b></span>
          </div>
        </div>
        <div className="Details-more">
          <div className="Details-more-maps">
            <h2>Conozca los aeropuertos transitados con este ticket</h2>
            <div className="Details-more-maps-item">
              <h3>{ticket.airport_from}</h3>
              <iframe src={ticket.map_from}></iframe>
            </div>
            <div className="Details-more-maps-item">
              <h3>{ticket.airport_to}</h3>
              <iframe src={ticket.map_to}></iframe>
            </div>
          </div>
        </div>
      </div>
      <h2>¿{user.name} Quieres comprar este ticket?</h2>
      <div className="Buy">
        <p>
          Recuerda que este ticket lo podrás utilizar con tu usuario <b>{user.user}</b> o con tu documento de identidad. Te recomendamos estar a las {ticket.hour_from} en el {ticket.airport_from}, este vuelo tendrá un tiempo estimado de {ticket.duration}.
        </p>
        <span>Por favor ingresa los datos de tu TDC para realizar el cobro</span>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <Link to="/tickets">Comprar</Link>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Details);
