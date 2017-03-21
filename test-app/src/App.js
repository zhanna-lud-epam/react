import React, { Component } from 'react';
import './App.css';
import Header from './Header';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/home',
    label: 'Home'
  }
]

class App extends Component {
  render() {
    return (
      <Header items={menu}/>
    );
  }
}

export default App;
