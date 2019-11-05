import React from 'react';
import Router from './Router';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount = () => {
    this.getUser();
  }
  
  getUser = async () => {
    const response = await axios.get('/user')
    const user = response.data
    if (user.user === true) {
      this.setState({currentUser: user})
    }
  }
  signOut = async () => {
    const response = await axios.get('/logOut') 
    this.setState({currentUser: null})
    return response.data.loggedOut
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router currentUser={currentUser ? currentUser : null} signOut={this.signOut} getUser={this.getUser} />
    );

  }

  
}

export default App;
