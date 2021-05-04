import React from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'; 
import Details from './pages/Details'; 
import GlobalStyles from './components/GlobalStyles'; 


function App() {
  return (
    <div className="App">
      <GlobalStyles />  
        <Router>
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/movies/:id">
              <Details />
            </Route>


           

          </Switch>
        </Router>
    </div>
  );
}

export default App;
