import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Books from './pages/Books';
import AllProducts from './pages/AllProducts'
import CreateAccount from './pages/CreateAccount';
/* import NewBook from './pages/NewBook'; */
import Product from './pages/Product';
import Favorites from './pages/Favorites';
import ShoppingCart from './pages/ShoppingCart';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/books" component={Books}/>
                <Route path="/allproducts" component={AllProducts}/>
                <Route path="/createaccount" component={CreateAccount}/>
                <Route path="/product" component={Product}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/shoppingcart" component={ShoppingCart}/>
                {/* <Route path="/book/new/:bookId" component={NewBook}/> */}
            </Switch>
        </BrowserRouter>
    );
}