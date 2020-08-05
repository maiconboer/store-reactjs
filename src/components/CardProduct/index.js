import React from 'react'

import { Container } from './styles';
import { Link } from 'react-router-dom';

const CardProduct = ({product}) => {
  const { id, nome } = product;
  
  function handleSelectProduct(id) {
    localStorage.setItem('@select:product', id)
  }

  return (
    <Container id={id}>
      <Link to={`product/${id}`} onClick={() => handleSelectProduct(id)}>
        <img src={product.fotos[0].src} alt={nome}/>
      </Link>
      <h2>{nome}</h2>
    </Container>
  )
}

export default CardProduct;
