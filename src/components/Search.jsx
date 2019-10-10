import React from 'react';
import '../assets/styles/components/Search.scss';
import airplaneFrom from '../assets/images/airplane-1.png';
import airplaneTo from '../assets/images/airplane-2.png';

const Search = () => {
  return (
    <div className='search'>
      <h1 className='search-title'>aerotravel</h1>
      <p className='search-text'>
        Disfruta de vuelos nacionales al mejor precio del mercado
      </p>
      <form className='search-form'>
        <p>¿Viajas ida y vuelta?</p>
        <div className='search-form-goingToggle'>
          <div className='search-form-goingToggle-item'>
            <input type='radio' id='huey' name='drone' value='huey' checked />
            <label htmlFor='huey'>Sí, ida y vuelta</label>
          </div>
          <div className='search-form-goingToggle-item'>
            <input type='radio' id='dewey' name='drone' value='dewey' />
            <label htmlFor='dewey'>No, solo ida</label>
          </div>
        </div>
        <div className='search-flights'>
          <div className='search-flights-item'>
            <img src={airplaneFrom} alt='aerotravel - vuelos de ida' />
            <div className='search-flights-item-input'>
              <label htmlFor='from'>¿De donde viajas?</label>
              <input type='text' id='from' name='flightFrom' value='' />
            </div>
            <div className='search-flights-item-input'>
              <label htmlFor='to'>¿Para donde viajas?</label>
              <input type='text' id='to' name='flightTo' value='' />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;