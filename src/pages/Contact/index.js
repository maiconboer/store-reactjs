import React from 'react'

import Head from '../../components/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content } from './styles';
import contactImg from '../../assets/images/contact.jpg';

const Contact = () => {
  return (
    <Container>
      <Head title='Contact' />
      <Header />

      <Content>
          <div className='wrapper'>
            <img src={contactImg} alt='Contact'/>
            <div className='informations'>
              <h2>Entre em contato.</h2>
              <p>maicon_boer@hotmail.com</p>
              <p>99999-9999</p>
              <p>Rua Ali Perto, 999</p>
            </div>
          </div>
        </Content>

      <Footer />
    </Container>
  )
}

export default Contact;
