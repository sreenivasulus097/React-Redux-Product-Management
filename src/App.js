import './public/styles.css';
import ProductListing from './containers/components/ProductListing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './containers/components/Header';
import ProductDetails from './containers/components/ProductDetails';

function App() {
  //const dispatch = useDispatch();
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={ProductListing}></Route>
        <Route path="/product/:productId" exact
        render = {(props)=><ProductDetails {...props} />} 
        />
        <Route path="/product/delete/:productId" exact
        render = {(props)=><ProductDetails {...props} />} 
        />
        <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
