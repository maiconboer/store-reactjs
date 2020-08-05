import React from 'react'
import api from '../../services/api';

import Head from '../../components/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardProduct from '../../components/CardProduct';
import { Container, Content } from './styles';

const Home = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    async function getProducts() {
      const {data} = await api.get('/');

      setProducts(data)
    }

    getProducts();
  },[])

  return (
    <Container>  
      <Head title='Home' />
      <Header />
      
      <Content>
        <div className='products'>
          {products && 
            products.map(product => (
              <CardProduct key={product.id} product={product}/>
            ))
          }
        </div>    
      </Content>

      <Footer />
    </Container>
  )
}

export default Home;
