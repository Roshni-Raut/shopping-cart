import React from 'react';
import { Route,Switch } from 'react-router';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/category/:catId" >
        <Category/>
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route> This is 404 page </Route>
    </Switch>
    </>
  );
}

export default App;
