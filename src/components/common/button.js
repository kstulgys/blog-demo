import React, { Component, Fragment } from 'react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

export const LinkTo = ({ to, text }) => (
  <Link
    to={to}
    className="f6 link br2 ba ph3 pv2 fr mb2 black bg-animate hover-bg-black hover-white"
  >
    {text}
  </Link>
)
