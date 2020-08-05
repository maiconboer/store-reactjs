import React from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import formatMoney from '../../utils/formatMoney';

import Head from '../../components/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content } from './styles';

const Product = () => { 
  const [product, setProduct] = React.useState(null);
  const location = useLocation();
  let id = location.pathname.replace('/product/', '')    

  React.useEffect(() => {
    async function getInformationProduct() {       
      try {       
        const { data } = await api.get(`${id}`);
        setProduct(data)

      } catch (error) {
        console.log(error)
      }     
    }

    getInformationProduct();
  },[id])

  return (
    <Container>  
      <Head title='Product Specification' />
      <Header />

      <Content>
        <div className='wrapper'>
            <div>
              {product && 
                product.fotos.map((foto) => (
                  <img 
                    key={foto.titulo}
                    src={foto.src} 
                    alt={foto.titulo}
                  />
              ))}
            </div>
            
            {product && 
              <div className='product-information'>
                <h2>{product.nome}</h2>
                <p className='price'>{formatMoney(product.preco)}</p>
                <p className='description'>{product.descricao}</p>
              </div>
            }   
          </div>
        </Content>
        
      <Footer />
    </Container>
  )
}

export default Product;
