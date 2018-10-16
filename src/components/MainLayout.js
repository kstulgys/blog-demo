import React, { Component } from 'react'
import styled from 'styled-components'

class MainLayout extends Component {
  render() {
    return (
      <div>
        <h1>Hello from main layout</h1>
      </div>
    )
  }
}

export default MainLayout

const Main = styled.main.attrs({
  className: 'flex w-100 h-100 items-center justify-center pt7',
})``

const Navigation = styled.div.attrs({
  className: 'shadow-2 bg-white',
})``

const Feed = styled.div.attrs({
  className: 'shadow-2 bg-white',
})``
const SideBar = styled.div.attrs({
  className: '',
})``
