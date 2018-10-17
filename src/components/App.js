import React, { Component } from 'react'
import styled from 'styled-components'
import MainLayout from './MainLayout'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout />
      </Router>
    )
  }
}

export default App
