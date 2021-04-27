import React from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'; 
import GlobalStyles from './components/GlobalStyles'; 


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1> Hello World ! </h1>
  
        <Router>
          <Switch>
            <Route path="/">
              <Home />
              </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
