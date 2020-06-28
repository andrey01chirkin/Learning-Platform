import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/header';
import {Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import Cards from './components/Cards';


class App extends Component {

  
  render() {

    return (
      <>
        <ButtonAppBar />
        
        <Route exact path='/' component={Cards} />
        <Route path='/signUp' component={SignUp}/>
        <Route path='/signIn' component={SignIn}/>
        
        
      </>
    );
  }
}
export default App;

