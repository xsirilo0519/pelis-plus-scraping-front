import React from 'react';
import './Cards.css'
const ContentModal = ({pelicula}) => {
  return <div>
      <div className='descripcion'>{pelicula.descripcion}</div>
      <a className='btn-detalle' href={pelicula.path} target="_blank">Link pelicula</a>
      <div className='categoria'>{pelicula.categoria}</div>
  </div>;
};

export default ContentModal;
