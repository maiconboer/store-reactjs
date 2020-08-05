import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import Page_404 from './Page_404';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={Product} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={Page_404} />
    </Switch>
  )
}

export default Routes
