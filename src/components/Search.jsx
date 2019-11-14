import React, { useState } from "react";
import "../assets/styles/components/Search.scss";
import airplaneFrom from "../assets/images/airplane-1.png";
import airplaneTo from "../assets/images/airplane-2.png";
import getCurrentDate from "../utils/getDate";

const Search = () => {
  const [date, setValues] = useState({
    dateForm: getCurrentDate("going"),
    dateReturn: getCurrentDate("return"),
    viewReturn: true
  });

  const handleChangeData = event => {
    setValues({
      ...date,
      [event.target.name]: event.target.value
    });
  };

  const handleToggleReturn = value => {
    setValues({
      ...date,
      viewReturn: !date.viewReturn
    });
  };

  return (
    <div className="search">
      <p className="search-text">Dinos cual es tu próximo destino...</p>
      <form className="search-form">
        <p>¿Viajas ida y vuelta?</p>
        <div className="search-form-goingToggle">
          <div className="search-form-goingToggle-item">
            <input
              type="radio"
              id="huey"
              name="drone"
              defaultChecked
              onChange={() => {
                handleToggleReturn();
              }}
            />
            <label htmlFor="huey">Sí, ida y vuelta</label>
          </div>
          <div className="search-form-goingToggle-item">
            <input
              type="radio"
              id="dewey"
              name="drone"
              onChange={() => {
                handleToggleReturn();
              }}
            />
            <label htmlFor="dewey">No, solo ida</label>
          </div>
        </div>

        <div className="search-form-flights">
          <div className="search-form-flights-item">
            <img src={airplaneFrom} alt="aerotravel - vuelos de ida" />
            <div className="search-form-flights-item-input">
              <label htmlFor="dateForm">¿De donde viajas?</label>
              <input
                type="text"
                id="dateForm"
                name="dateForm"
                placeholder="País, ciudad o aeropuerto..."
              />
              <label htmlFor="to">¿Para donde viajas?</label>
              <input
                type="text"
                id="to"
                name="dateReturn"
                placeholder="País, ciudad o aeropuerto..."
              />
            </div>
          </div>
          {date.viewReturn && (
            <div className="search-form-flights-item">
              <img src={airplaneTo} alt="aerotravel - vuelos de ida" />
              <div className="search-form-flights-item-input">
                <label htmlFor="dateReturn">¿Qué fecha regresas?</label>
                <input
                  type="date"
                  id="dateReturn"
                  name="dateReturn"
                  value={date.dateReturn}
                  onChange={event => {
                    handleChangeData(event);
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <input
          type="submit"
          value={date.viewReturn ? "Buscar vuelos" : "Buscar vuelo"}
        />
      </form>
    </div>
  );
};

export default Search;
