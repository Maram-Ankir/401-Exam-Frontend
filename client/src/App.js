import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Favourite from './components/Favourite';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
         <Router>
          <Switch>
            <Route exact path="/">
               <Main/>
            </Route>
                 
            <Route exact path="/Favourite">
                 <Favourite/>
            </Route>

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
