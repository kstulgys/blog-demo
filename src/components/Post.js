import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom'
import { User, ME_QUERY } from './User'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'

export default class Post extends Component {
  state = {
    bookmarkId: 'thereisnobookmark',
    postId: '',
    isBookmarked: null,
  }
  // componentDidMount() {
  // let bookmarkId = 'thereisnobookmark'
  // const postId = this.props.post.id

  // let bookmark = {}
  // if (data && data.me) {
  //   bookmark = data.me.bookmarks.filter(bm => bm.post.id === postId)
  //   bookmarkId = bookmark ? bookmark.id : bookmarkId
  //   // bookmark = bookmark && bookmark[0]
  //   // bookmarkId = bookmark ? bookmark.id : bookmarkId
  // }
  // const isBookmarked = bookmarkId !== 'thereisnobookmark'
  // }
  render() {
    const postId = this.props.post.id
    const { id, title, author, text } = this.props.post
    return (
      <User>
        {({ data, loading, error }) => {
          if (loading) return <h1>Loading from post...</h1>
          if (error) return <h1>Error from post...</h1>

          let bookmarkId = 'thereisnobookmark'
          let bookmark = {}

          if (data.me) {
            bookmark = data.me.bookmarks.filter(bm => bm.post.id === postId)[0]
            bookmarkId = bookmark ? bookmark.id : bookmarkId
            // bookmark = bookmark && bookmark[0]
            // bookmarkId = bookmark ? bookmark.id : bookmarkId
          }
          const isBookmarked = bookmarkId !== 'thereisnobookmark'
          // console.log('bookmarkId', bookmarkId)
          const variables = isBookmarked ? { bookmarkId } : { postId }
          return (
            <article className="pv3 bt bb b--black-10 ph3 w-40-ns w-100-m">
              <div className="flex flex-column flex-row-ns h-100">
                <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns flex flex-column justify-between">
                  <Link
                    className="no-underline ma1 link black"
                    to={`/post/${id}`}
                  >
                    <h1 className="f3 athelas ma0 pa0 lh-title">{title}</h1>
                  </Link>
                  <p className="items-start h4 f5 f4-l lh-copy athelas">
                    {text}
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <p className="f6 lh-copy gray ma0 ttu">
                        By {author.name}
                      </p>
                      <p className="f6 db gray ma0">Nov. 21, 2016</p>
                    </div>
                    <Mutation
                      mutation={
                        isBookmarked
                          ? DELETE_BOOKMARK_MUTATION
                          : CREATE_BOOKMARK_MUTATION
                      }
                      variables={variables}
                      update={(cache, payload) => {
                        const data = cache.readQuery({
                          query: ME_QUERY,
                        })
                        if (payload.data.createBookmark) {
                          const { createBookmark } = payload.data
                          data.me.bookmarks = [
                            ...data.me.bookmarks,
                            createBookmark,
                          ]
                        }
                        if (
                          payload.data.deleteBookmark &&
                          payload.data.deleteBookmark.id
                        ) {
                          const { deleteBookmark } = payload.data
                          console.log('deleteBookmark', deleteBookmark)
                          data.me.bookmarks = data.me.bookmarks.filter(
                            bm => bm.id !== deleteBookmark.id,
                          )
                        }
                        cache.writeQuery({
                          query: ME_QUERY,
                          data,
                        })
                      }}
                      optimisticResponse={{
                        __typename: 'Mutation',
                        deleteBookmark: {
                          __typename: 'Bookmark',
                          id: bookmarkId,
                        },
                      }}
                    >
                      {bookmarkMutation =>
                        isBookmarked ? (
                          <a
                            href="/#"
                            onClick={bookmarkMutation}
                            className="no-underline link black self-end"
                          >
                            <FaBookmark />
                          </a>
                        ) : (
                          <a
                            href="/#"
                            onClick={bookmarkMutation}
                            className="no-underline link black self-end"
                          >
                            <FaRegBookmark />
                          </a>
                        )
                      }
                    </Mutation>
                  </div>
                </div>

                <div className="order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns overflow-hidden">
                  <img
                    alt="pic"
                    src="http://mrmrs.github.io/photos/cpu.jpg"
                    className="grow db"
                  />
                </div>
              </div>
            </article>
          )
        }}
      </User>
    )
  }
}

export const CREATE_BOOKMARK_MUTATION = gql`
  mutation CREATE_BOOKMARK_MUTATION($postId: ID!) {
    createBookmark(postId: $postId) {
      id
      post {
        id
        title
        text
        author {
          id
          name
        }
      }
    }
  }
`

export const DELETE_BOOKMARK_MUTATION = gql`
  mutation DELETE_BOOKMARK_MUTATION($bookmarkId: ID!) {
    deleteBookmark(bookmarkId: $bookmarkId) {
      id
    }
  }
`

// {bookmarkMutation ? (
//   <a
//     href="/#"
//     className="no-underline link black self-end"
//   >
//     <FaBookmark />
//   </a>
// ) : (
//   <a
//     href="/#"
//     className="no-underline link black self-end"
//   >
//     <FaRegBookmark />
//   </a>
// )}
