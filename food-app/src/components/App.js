  import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
  import FoodForm from './foods/FoodForm';
  import FoodContainer from '../containers/FoodContainer';
  //import FoodCard from './foods/FoodCard';
  import NavBar from './navigation/NavBar'; 
  import Header from './navigation/Header';
  import Footer from './navigation/Footer';
  import Home from './Home';
  import About from './About';
  import SignUp from './SignUp';
  import Cart from './Cart'
  import FoodDetails from './foods/FoodDetails';
  import { FoodsProvider } from '../context/FoodsProvider';
import Login from './Login';
import Logout from './Logout';
import { UserProvider } from '../context/UserProvider';



function App() {
  return (
    <div className="App">
      <UserProvider>
      <FoodsProvider >
      <Router>
        <NavBar />
        <Header storeName="Racheal's African Kitchen" slogan='The heart of african foods'/>
        <Switch>
          <Route exact path="/foods/new">
            <FoodForm />
          </Route>

          <Route exact path="/foods/:foodId">
            <FoodDetails />
          </Route>

          
          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/foods">
            <FoodContainer />
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>


          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

           <Route path="*">
            <h3>404 Page Not Found</h3>
          </Route> 
        
        </Switch>
      </Router>
      <Footer />
      </FoodsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
