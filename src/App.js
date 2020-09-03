import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
    <Header />
<<<<<<< HEAD

=======
      
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
    <Router>
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
