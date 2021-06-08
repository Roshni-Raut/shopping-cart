import React from 'react';
import { Route,Switch } from 'react-router';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import Category from './pages/Category';
import { TotalProvider } from './misc/cartBtn.context';

function App() {
  return (
    <TotalProvider>
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
    </TotalProvider>
  );
}

export default App;
