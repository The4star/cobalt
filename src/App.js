import React from 'react';
import Router from './Router';
import axios from 'axios'
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions'

import './App.css';

class App extends React.Component {

  componentDidMount = () => {
    this.getUser();
  }
  
  getUser = async () => {
    const  { setCurrentUser } = this.props;
    const response = await axios.get('/user')
    const user = response.data
    if (user.loggedIn === true) {
      setCurrentUser(user)
    }
  }

  signOut = async () => {
    const { setCurrentUser } = this.props;
    const response = await axios.get('/logOut') 
    setCurrentUser(null)
    return response.data.loggedOut
  }

  render() {
    return (
      <Router signOut={this.signOut} getUser={this.getUser} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
