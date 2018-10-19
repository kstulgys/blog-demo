import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './NavBar'
import FeedPage from './FeedPage'
import ModalWrapper from './Modal/ModalConductor'
import Bookmarked from './Bookmarked'
import { Route } from 'react-router-dom'
import ModalConductor from '../components/Modal/ModalConductor'
import { Row, Col } from 'antd'
// <Row>
// <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
// <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
// <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
// </Row>,
class MainLayout extends Component {
  render() {
    return (
      <div>
        <ModalConductor />
        <Navbar />
        <Row type="flex" justify="center">
          <Col
            className="flex flex-wrap"
            xs={{ span: 23 }}
            md={{ span: 23 }}
            lg={{ span: 15 }}
          >
            <Route path="/" component={FeedPage} />
          </Col>
          <Col xs={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4, offset: 1 }}>
            <Bookmarked />
          </Col>
        </Row>
      </div>
    )
  }
}

export default MainLayout

// <Bookmarked />
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
