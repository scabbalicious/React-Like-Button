import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {clicks: 0}
    this.state = {
      clicks: 0,
      status: "Likes"
    }
  }
  increment = () => {
    if(this.state.clicks == 0){
      this.setState({
        status: "Like"
      })} else {
        this.setState({
          status: "Likes"
        })
      }
    
    this.setState ({
      clicks: this.state.clicks+1
    })
  }
  render() {
    return (
      <div className="App">
        <button className="like" onClick={this.increment.bind(this)}>{this.state.clicks} {this.state.status}
        </button>
      </div>
    );
  }
}

export default App;
