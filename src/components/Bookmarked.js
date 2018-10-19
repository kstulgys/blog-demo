import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import User from './User'
class Bookmarked extends Component {
  render() {
    return (
      <Fragment>
        <User>
          {({ data }) => (
            <div>
              {data.me && <h2 className="tc">My bookmarks</h2>}
              <div>
                {data.me &&
                  data.me.bookmarks.map(bm => (
                    <div key={bm.id} className="shadow-2 h3 mt2 pointer grow">
                      <p className="pa3">{bm.post.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </User>
      </Fragment>
    )
  }
}

export default Bookmarked

// const Main = styled.section.attrs({
//   className: 'shadow-2 bg-white',
// })``
