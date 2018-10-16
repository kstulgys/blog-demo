import React, { Component, Fragment } from 'react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'
// import styled from 'tachyons-components'

import { User } from './User'
// import CreatePost from '../Post/CreatePost'
// import LogIn from '../LogIn'

class Navbar extends Component {
  render() {
    return (
      <User>
        {({ data }) => (
          <Nav>
            <div className="w-100 flex justify-between h3 items-center">
              <div>
                <StyledLink to="/">
                  <img
                    src="http://tachyons.io/img/logo.jpg"
                    className="dib w2 h2 br-100 grow"
                    alt="Site Name"
                  />
                </StyledLink>
              </div>
              <div>
                <StyledLink
                  hover={`hover-bg-lightest-silver hover-black`}
                  to="/"
                >
                  Create draft
                </StyledLink>
                <StyledLink to="/">Log in</StyledLink>
                <StyledLink to="/">Log out</StyledLink>
                <StyledLink to="/">Profile</StyledLink>
              </div>
            </div>
          </Nav>
        )}
      </User>
    )
  }
}

export default Navbar

const StyledLink = props => {
  const className = `link dark-gray f6 f5-l dib bg-animate ${props.hover} pa3`

  return (
    <Link className={className} to={props.to}>
      <div className="grow-large">{props.children}</div>
    </Link>
  )
}

const Nav = styled.nav.attrs({
  className: 'db dt-l w-100 border-box ph5-l pv0-l',
})``

// const Button = styled('button')`
//   f6 f5-ns fw6 dib ba
//   b--black-20 bg-blue white
//   ph3 ph4-ns pv2 pv3-ns br2
//   grow no-underline link
// `

// const Nav = styled('nav')`
//   pa3 pv5-ns ph5-ns mh5-ns mh0-m
// `

// const Nav = styled('nav')`
//   f6 link br2 ba ph3 pv2 fr mb2
//   black bg-animate hover-bg-black
//   hover-white
// `

// https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png

// const LinkTo = styled.a.attrs({
//   href: '/#',
//   className: 'f6 f5-l link bg-animate black-80 hover-bg-grey dib pa3 ph4-l',
// })``

// const LinkTo = ({ className, children, to }) => (
//   <Link to={to} style={className}>
//     {children}
//   </Link>
// )

// const StyledLink = styled.a.attrs({
//   href: '/#',
//   className: 'f6 f5-l link bg-animate black-80 hover-bg-grey dib pa3 ph4-l',
// })``

// const StyledLink = function (props) {
//     const className=`f6 dim ph3 pv2 mb2 dib ${props.color || 'white'} bg-${props.backgroundColor || 'dark-blue'}`

//     return (
//       <button
//         className={className}
//         onClick={props.onClick}>
//         {props.children || 'Submit'}
//       </button>
//     )
//   }

// {
/* <Link
to={to}
className="f6 link br2 ba ph3 pv2 fr mb2 black bg-animate hover-bg-black hover-white"
>
{text}
</Link> */
// }

// ;<nav className="pa3 pv5-ns ph5-ns mh5-ns mh0-m">
//   <Link className="link dim black b f6 f5-ns dib mr3" to="/" title="Feed">
//     Blog
//   </Link>
//   <NavLink
//     className="link dim f6 f5-ns dib mr3 black"
//     activeClassName="gray"
//     exact={true}
//     to="/"
//     title="Feed"
//   >
//     Feed
//   </NavLink>
//   {this.props.data &&
//     this.props.data.me &&
//     this.props.data.me.email &&
//     this.state.token && (
//       <NavLink
//         className="link dim f6 f5-ns dib mr3 black"
//         activeClassName="gray"
//         exact={true}
//         to="/drafts"
//         title="Drafts"
//       >
//         Drafts
//       </NavLink>
//     )}
//   {this.state.token ? (
// <div
//   onClick={() => {
//     this.refreshTokenFn &&
//       this.refreshTokenFn({
//         [AUTH_TOKEN]: null,
//       })
//     window.location.href = '/'
//   }}
//   className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
// >
//   Logout
// </div>
//     <LinkTo to="/" text="Logout" />
//   ) : (
//     <Link
//       to="/login"
//       className="f6 link br2 ba ph3 pv2 fr mb2  black bg-animate hover-bg-black hover-white"
//     >
//       Login
//     </Link>
//   )}
//   {this.props.data &&
//     this.props.data.me &&
//     this.props.data.me.email &&
//     this.state.token && (
//       <Link
//         to="/create"
//         className="f6 link dim br2 ba ph3 pv2 fr mb2 dib black"
//       >
//         + Create Draft
//       </Link>
//     )}
// </nav>
