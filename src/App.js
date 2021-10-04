import './App.scss';
import NavBar from './Components/NavBar/NavBar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
