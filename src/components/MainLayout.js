import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './NavBar'
import FeedPage from './FeedPage'
import ModalWrapper from '../components/Modal/ModalWrapper'
import Bookmarked from './Bookmarked'
import { Route } from 'react-router-dom'
class MainLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="flex-ns w-100">
          <div className="fl h-100 w-100 w-80-ns flex-ns flex-wrap flex-column-m">
            <Route path="/" component={FeedPage} />
          </div>
          <div className="fl w-0 w-20-ns pr2">
            <Bookmarked />
          </div>
        </div>
      </div>
    )
  }
}

export default MainLayout

// const Main = styled.main.attrs({
//   className: 'flex w-100 h-100 items-center justify-center',
// })``

// const Navigation = styled.div.attrs({
//   className: 'shadow-2 bg-white',
// })``

// const Feed = styled.div.attrs({
//   className: 'shadow-2 bg-white',
// })``
// const SideBar = styled.div.attrs({
//   className: '',
// })``
