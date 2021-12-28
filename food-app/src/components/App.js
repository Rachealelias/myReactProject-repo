  import './App.css';
  import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
  import FoodForm from './foods/FoodForm';
  import FoodContainer from '../containers/FoodContainer';
  import FoodCard from './foods/FoodCard';
  import NavBar from './navigation/NavBar'; 
  import Header from './navigation/Header';
  import Footer from './navigation/Footer';
  import Home from './Home';
  import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/foods/new">
            <FoodForm />
          </Route>

          <Route path="/foods/:id">
            <FoodCard />
          </Route>

          <Route path="/foods">
            <FoodContainer />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
