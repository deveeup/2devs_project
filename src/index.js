import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App.js';

const initialState = {
  user: {
    name: "Carlos",
    lastName: "Gonzalez",
    user: "carlos_g",
    phone: "3023876592",
    email: "carlosg@gmail.com",
    address: "Cll 137 #91-97, T3, Apto 802",
    lifeMiles: false
  },
  cart: [],
  tickets: [
    {
      "id_ticket": "ATFWN557",
      "id_flight": "VO690718",
      "title": "Bogotá - Medellín",
      "from": "Bogotá",
      "to": "Medellín",
      "air_type": "Ejecutivo",
      "hour_from": "17:00",
      "hour_to": "17:45",
      "tickets": "43",
      "price": 239,
      "date": "Sábado 23 Noviembre 2019",
      "img": "https://resizer.iprofesional.com/unsafe/640x/https://assets.iprofesional.com/assets/jpg/2018/12/470985.jpg?5.0.0.2"
    },
    {
      "id_ticket": "ATSZG157",
      "id_flight": "HT583688",
      "title": "Bogotá - Medellín",
      "from": "Bogotá",
      "to": "Medellín",
      "air_type": "Ejecutivo",
      "hour_from": "19:00",
      "hour_to": "19:35",
      "tickets": "67",
      "price": 270,
      "date": "Sábado 23 Noviembre 2019",
      "img": "https://www.elcolombiano.com/documents/10157/0/640x280/0c0/0d0/none/11101/GJBD/avianca-640x280-12092013.jpg"
    },
    {
      "id_ticket": "ATXBV873",
      "id_flight": "XM094760",
      "title": "Bogotá - Medellín",
      "from": "Bogotá",
      "to": "Medellín",
      "air_type": "VIP",
      "hour_from": "19:15",
      "hour_to": "19:45",
      "tickets": "18",
      "price": 310,
      "date": "Sábado 23 Noviembre 2019",
      "img": "https://thearchipielagopress.co/wp-content/uploads/2017/06/COLOMBIA-VIVA.jpg"
    },
    {
      "id_ticket": "ATIFV832",
      "id_flight": "RL374987",
      "title": "Bogotá - Medellín",
      "from": "Bogotá",
      "to": "Medellín",
      "air_type": "Normal",
      "hour_from": "12:00",
      "hour_to": "12:45",
      "tickets": "87",
      "price": 189,
      "date": "Sábado 23 Noviembre 2019",
      "available": false,
      "img": "https://www.aviacol.net/images/stories/0VIVA_AIR/2019/Airbus_A320_Viva_Air_Santa_Marta.jpg"
    },
    {
      "id_ticket": "ATYSU372",
      "id_flight": "EE067131",
      "title": "Bogotá - Medellín",
      "from": "Bogotá",
      "to": "Medellín",
      "air_type": "Normal",
      "hour_from": "14:00",
      "hour_to": "14:50",
      "tickets": "15",
      "price": 165,
      "date": "Sábado 23 Noviembre 2019",
      "img": "https://static.iris.net.co/semana/upload/images/2019/5/24/617048_1.jpg"
    },
    {
      "id_ticket": "ATHOA976",
      "id_flight": "SX331499",
      "title": "Bogotá - Medellín",
      "from": "Bogotá",
      "to": "Medellín",
      "air_type": "Normal",
      "hour_from": "14:15",
      "hour_to": "14:55",
      "tickets": "22",
      "price": 159,
      "date": "Sábado 23 Noviembre 2019",
      "img": "https://www.kienyke.com/wp-content/uploads/2019/03/viva-air.jpg"
    }
  ],
  total: 0,
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);