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
    lifeMiles: false,
    pic: "http://www.simon-li.com/projects/mongkok/cs2/images/gallery/small/random-user-13.jpg"
  },
  user_tickets: [],
  tickets: [
    {
      "id_ticket": "ATFWN557",
      "id_flight": "VO690718",
      "title": "Bogotá - Medellín",
      "from": "Bogotá",
      "airport_from": "Aeropuerto Internacional El Dorado",
      "map_from": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.673436280276!2d-74.1411046!3d4.6971504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1574961970122!5m2!1ses!2sco",
      "map_to": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.804356745837!2d-75.4276201!3d6.1707634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9263a9a2a8b8e1b8!2sAeropuerto%20Internacional%20Jos%C3%A9%20Mar%C3%ADa%20C%C3%B3rdova!5e0!3m2!1ses!2sco!4v1574962097680!5m2!1ses!2sco",
      "airport_to": "Aeropuerto Internacional José María Córdova",
      "airline": "Avianca",
      "duration": "45min",
      "luggage": "23kg",
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
      "map_from": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.673436280276!2d-74.1411046!3d4.6971504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1574961970122!5m2!1ses!2sco",
      "map_to": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.804356745837!2d-75.4276201!3d6.1707634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9263a9a2a8b8e1b8!2sAeropuerto%20Internacional%20Jos%C3%A9%20Mar%C3%ADa%20C%C3%B3rdova!5e0!3m2!1ses!2sco!4v1574962097680!5m2!1ses!2sco",
      "airport_from": "Aeropuerto Internacional El Dorado",
      "airport_to": "Aeropuerto Internacional José María Córdova",
      "airline": "LATAM",
      "duration": "35min",
      "luggage": "15kg",
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
      "airport_from": "Aeropuerto Internacional El Dorado",
      "airport_to": "Aeropuerto Internacional José María Córdova",
      "map_from": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.673436280276!2d-74.1411046!3d4.6971504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1574961970122!5m2!1ses!2sco",
      "map_to": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.804356745837!2d-75.4276201!3d6.1707634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9263a9a2a8b8e1b8!2sAeropuerto%20Internacional%20Jos%C3%A9%20Mar%C3%ADa%20C%C3%B3rdova!5e0!3m2!1ses!2sco!4v1574962097680!5m2!1ses!2sco",
      "airline": "Vivacolombia",
      "duration": "30min",
      "luggage": "23kg",
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
      "airport_from": "Aeropuerto Internacional El Dorado",
      "airport_to": "Aeropuerto Internacional José María Córdova",
      "map_from": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.673436280276!2d-74.1411046!3d4.6971504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1574961970122!5m2!1ses!2sco",
      "map_to": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.804356745837!2d-75.4276201!3d6.1707634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9263a9a2a8b8e1b8!2sAeropuerto%20Internacional%20Jos%C3%A9%20Mar%C3%ADa%20C%C3%B3rdova!5e0!3m2!1ses!2sco!4v1574962097680!5m2!1ses!2sco",
      "airline": "Avianca",
      "duration": "45min",
      "luggage": false,
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
      "airport_from": "Aeropuerto Internacional El Dorado",
      "airport_to": "Aeropuerto Internacional José María Córdova",
      "map_from": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.673436280276!2d-74.1411046!3d4.6971504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1574961970122!5m2!1ses!2sco",
      "map_to": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.804356745837!2d-75.4276201!3d6.1707634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9263a9a2a8b8e1b8!2sAeropuerto%20Internacional%20Jos%C3%A9%20Mar%C3%ADa%20C%C3%B3rdova!5e0!3m2!1ses!2sco!4v1574962097680!5m2!1ses!2sco",
      "airline": "LATAM",
      "duration": "50min",
      "luggage": "23kg",
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
      "airport_from": "Aeropuerto Internacional El Dorado",
      "airport_to": "Aeropuerto Internacional José María Córdova",
      "map_from": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.673436280276!2d-74.1411046!3d4.6971504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1574961970122!5m2!1ses!2sco",
      "map_to": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.804356745837!2d-75.4276201!3d6.1707634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9263a9a2a8b8e1b8!2sAeropuerto%20Internacional%20Jos%C3%A9%20Mar%C3%ADa%20C%C3%B3rdova!5e0!3m2!1ses!2sco!4v1574962097680!5m2!1ses!2sco",
      "airline": "Vivacolombia",
      "duration": "40min",
      "luggage": "23kg",
      "air_type": "Normal",
      "hour_from": "14:15",
      "hour_to": "14:55",
      "tickets": "22",
      "price": 159,
      "date": "Sábado 23 Noviembre 2019",
      "img": "https://www.kienyke.com/wp-content/uploads/2019/03/viva-air.jpg"
    }
  ],
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