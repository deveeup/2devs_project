import React from "react";
import Ticket from "../components/Ticket";
import "../assets/styles/containers/Results.scss";
const Results = props => {
  return (
    <div className="Results">
      <h1>Resultados de la busqueda</h1>
      <div className="Results-container">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
};

export default Results;
