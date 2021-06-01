import React from 'react';
import { Route,Switch } from 'react-router';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Homepage/>
      </Route>
      <Route exact path="/category" >
        <Category/>
      </Route>
      <Route exact path="/Cart">
        <Cart/>
      </Route>
    </Switch>
  );
}

export default App;
