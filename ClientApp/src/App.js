import React, { Component } from 'react';
import { Route } from 'react-router';
import Products from './components/Products';
import { NavMenu } from './components/NavMenu';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

import './index.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
      <NavMenu/>
        <Route exact path='/' component={Products} />
        <Route path='/edit/:productId' exact component={EditProduct} />
        <Route path='/add' component={AddProduct} />
      </>
    );
  }
}
