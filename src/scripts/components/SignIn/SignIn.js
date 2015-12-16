import React from 'react';
import {Link} from 'react-router-component';

// Flux
import BlogActions from '../../actions/BlogActions';
import BlogStore from '../../stores/BlogStore';

// Components

const styles = {
  wrap: {
    textAlign: 'center',
    varticalAlign: 'center'
  }
};

const SignIn = React.createClass({
  getInitialState(){
    return{
      email: '',
      password: ''
    }
  },

  _onEmailChange(e){
    this.setState({
      email: e.target.value 
    })
  },

  _onPasswordChange(e){
    this.setState({
      password: e.target.value 
    })
  },

  _loginChange() {
    this.setState({
      email: '',
      name: ''
    });
  },

  componentDidMount(){
    BlogStore.addChangeListener(this._loginChange)
  },

  componentWillUnmount(){
    BlogStore.removeChangeListener(this._loginChange)
  },

  render() {
    return (
        <div id='SignIn' style={styles.wrap}>
          <div id='email'>
            <h2> Email </h2>
            <input type='text' onChange={this._onEmailChange} value={this.state.email} />
          </div>

          <div id='password'>
            <h2> Password </h2>
            <input type='text' onChange={this._onPasswordChange} value={this.state.password} />
          </div>

          <button>
            <Link href='/'> Submit </Link>
          </button>
        </div>
    )
  }
});

module.exports = SignIn;
