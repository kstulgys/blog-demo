// import React, { Component, Fragment } from 'react'
// import {
//   NavLink,
//   Link,
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom'
// import styled from 'styled-components'
// import { AUTH_TOKEN } from '../constant'

// import { User } from './User'

// import { Mutation, Query } from 'react-apollo'
// import { gql } from 'apollo-boost'

// class Navbar extends Component {
//   render() {
//     return (
//       <User>
//         {({ data: { me }, loading }) => {
//           if (loading) return <span>Loading..</span>
//           return (
//             <Nav>
//               <div className="flex justify-between items-center">
//                 <StyledLink to="/">
//                   <img
//                     src="http://tachyons.io/img/logo.jpg"
//                     className="dib w2 h2 br-100 grow"
//                     alt="Site Name"
//                   />
//                 </StyledLink>
//                 <div>
//                   {me ? (
//                     <Fragment>
//                       <StyledLink normal>Create draft</StyledLink>

//                       <StyledLink
//                         normal
//                         removeAuth={localStorage.removeItem(AUTH_TOKEN)}
//                       >
//                         Log out
//                       </StyledLink>

//                       <StyledLink to="/">Profile</StyledLink>
//                     </Fragment>
//                   ) : (
//                     // <StyledLink to="/">Log in</StyledLink>
//                     <Mutation
//                       mutation={OPEN_MODAL_MUTATION}
//                       variables={{ currentModal: 'LOG_IN' }}
//                     >
//                       {openModalMutation => (
//                         <StyledLink
//                           normal
//                           openModalMutation={openModalMutation}
//                         >
//                           Log in
//                         </StyledLink>
//                       )}
//                     </Mutation>

//                     // <LogInModal />
//                   )}
//                 </div>
//               </div>
//             </Nav>
//           )
//         }}
//       </User>
//     )
//   }
// }

import React, { Component, Fragment } from 'react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import {
  Menu,
  Icon,
  Input,
  Divider,
  Avatar,
  Form,
  Button,
  Checkbox,
} from 'antd'

import User from './User'
// import CreatePost from '../Post/CreatePost'
// import LogIn from '../LogIn'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'
const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const Search = Input.Search
class Navbar extends Component {
  render() {
    return (
      <User>
        {({ data, loading }) => {
          if (loading) return null
          return (
            <Menu
              mode="horizontal"
              style={{
                display: 'flex',
              }}
            >
              <div style={{ flex: 0.33 }} />
              <Link
                to="/"
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <h1 style={{ margin: 0 }}>ReMedium</h1>
              </Link>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{
                  width: 200,
                  paddingTop: 5,
                  paddingBottom: 5,
                  marginRight: '1%',
                }}
              />
              {data.me ? (
                <SubMenu
                  className="pr1"
                  title={
                    <span className="submenu-title-wrapper">
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <p style={{ margin: 0, padding: 0 }}>create post</p>
                  </Menu.Item>
                  <Menu.Item key="2">drafts</Menu.Item>
                  <Menu.Item key="3">liked posts</Menu.Item>
                  <Menu.Item key="4">bookmarks</Menu.Item>
                  <Divider className="pa0 ma0" />
                  <Menu.Item key="5">profile</Menu.Item>
                  <Menu.Item
                    key="6"
                    onClick={() => {
                      localStorage.removeItem('AUTH_TOKEN')
                      window.location.reload()
                    }}
                  >
                    log out
                  </Menu.Item>
                </SubMenu>
              ) : (
                <Menu.Item key="7" style={{ marginRight: '5%' }}>
                  <Mutation
                    mutation={OPEN_MODAL_MUTATION}
                    variables={{ currentModal: 'LOG_IN' }}
                  >
                    {openModalMutation => (
                      <p className="ma0" onClick={openModalMutation}>
                        Log in
                      </p>
                    )}
                  </Mutation>
                </Menu.Item>
              )}
            </Menu>
          )
        }}
      </User>
    )
  }
}

export default Navbar

const OPEN_MODAL_MUTATION = gql`
  mutation OPEN_MODAL_MUTATION($currentModal: String!) {
    openModal(currentModal: $currentModal) @client {
      currentModal
    }
  }
`

// <ModalWrapper currentModal="LOG_IN">
// {openModalMutation => (
//   <StyledLink
//     normal
//     openModalMutation={openModalMutation}
//   >
//     Log in
//   </StyledLink>
// )}
// </ModalWrapper>

// const StyledLink = props => {
//   const className = `link dark-gray f6 f5-l dib bg-animate pa2 pa3-ns pointer`

//   return (
//     <Fragment>
//       {props.normal ? (
//         <a className={className} onClick={props.openModalMutation}>
//           <div className="grow">{props.children}</div>
//         </a>
//       ) : (
//         <Link className={className} to={props.to}>
//           <div className="grow">{props.children}</div>
//         </Link>
//       )}
//     </Fragment>
//   )
// }

// const Nav = styled.nav.attrs({
//   className: 'bb b--black-10 w-100 ph4 ph5-l',
// })``

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
