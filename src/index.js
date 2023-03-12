import React from 'react';
import ReactDOM from 'react-dom/client';
import FotoKutu from "./FotoKutu.jsx"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section id='foto-liste'>

    <FotoKutu url="https://picsum.photos/id/0/250/150" sahibi="Alejandro Escamilla" />
    <FotoKutu url="https://picsum.photos/id/1/250/150" sahibi="Lorem Ipsum" />
    <FotoKutu url="https://picsum.photos/id/2/250/150" sahibi="Dolor Sit" />
    <FotoKutu url="https://picsum.photos/id/3/250/150" sahibi="Müslüm Gürses" />
    <FotoKutu url="https://picsum.photos/id/4/250/150" sahibi="Ferdi Tayfur" />
    <FotoKutu url="https://picsum.photos/id/5/250/150" sahibi="Orhan Gencebay" />

  </section>
);

