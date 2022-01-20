import React from 'react';
import './Cards.css'
const Cards = ({pelicula,handleOpen,titulo}) => {
  return <div className='card'>
    <h1>{titulo}</h1>
    <div className='categoria' >{pelicula.categoria}</div>
    <div className='btn-detalle' onClick={()=>{handleOpen(pelicula)}}>Detalles</div>
  </div>;
};

export default Cards;
