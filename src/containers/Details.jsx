import React, { useState, useEffect } from 'react';
import '../assets/styles/containers/Results.scss';
const Details = (props) => {
  console.log(props.location.state.ticket)
  return (
    <div className='Details'>
      <h1>Details de la busqueda</h1>
    </div>
  );
};

export default Details;
