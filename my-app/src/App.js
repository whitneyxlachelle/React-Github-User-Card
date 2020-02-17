import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/whitneyxlachelle`)
      .then(result => {
      //console.log(result.data)
        this.setState({
          user: result.data
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
     // console.log("componentDidMount is running")
  }

  
  render() {
    //console.log(this.state.user);
    return (
      <>
        <h1>User Cards</h1>
        <UserCard
        user={this.state.user} />
      </>
    )
  }

}

export default App;

