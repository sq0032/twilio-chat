import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchToken } from '../actions'


class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchToken())
  }
  
  render() {
    const { token, error } = this.props
    
    return (
      <div>
        <div>Chat App</div>
        <div>Token: {token}</div>
        <div>Error: {error}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    error: state.error
  }
}

export default connect(
  mapStateToProps
)(App);


