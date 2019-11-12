import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Default from './Default';
import Verified from './Verified';
import VerifiedOrg from './VerifiedOrg';
import Search from './Search';
import How from './How';
import Terms from './Terms';
import Privacy from './Privacy';



export default class App extends Component {
  render(){
    return (
      <React.Fragment>
     <Navbar/>
     <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/Verified" component={Verified}/>
       <Route exact path="/Verified Organizations" component={VerifiedOrg}/>
       <Route exact path="/Search" component={Search}/>
       <Route exact path="/How" component={How}/>
       <Route exact path="/Terms" component={Terms}/>
       <Route exact path="/Privacy" component={Privacy}/>
       <Route path="/default" component={Default}/>
     </Switch>
     </BrowserRouter>
     <Footer/>
     </React.Fragment>
    );
  }
}



