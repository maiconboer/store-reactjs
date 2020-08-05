import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Header = () => {
  const activeStyle = {
    backgroundColor: '#999999',
  }

  return (
    <Container>
      <NavLink to='/' exact activeStyle={activeStyle}> 
        Produtos 
      </NavLink>
      <NavLink to='/contact' activeStyle={activeStyle}> 
        Contato 
      </NavLink>
    </Container>
  )
}

export default Header;
