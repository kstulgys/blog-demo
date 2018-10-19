import React, { Component, Fragment } from 'react'
import { Modal, Button, Form, Icon, Input, Checkbox } from 'antd'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import User, { ME_QUERY } from './User'
import ModalWrapper from './Modal/ModalWrapper'
// import { AUTH_TOKEN } from '../../constant
import { withRouter } from 'react-router-dom'
const FormItem = Form.Item
class LogInModal extends Component {
  state = {
    visible: false,
    name: '',
    email: '',
    password: '',
    login: true,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    const { login, name, email, password } = this.state
    // console.log(this.state)
    return (
      <ModalWrapper>
        {!login && (
          <FormItem>
            <Input
              onChange={this.handleChange}
              placeholder="Name"
              name="name"
              prefix={<Icon type="user" />}
            />
          </FormItem>
        )}
        <FormItem>
          <Input
            onChange={this.handleChange}
            name="email"
            prefix={<Icon type="mail" />}
            placeholder="Email"
          />
        </FormItem>
        <FormItem>
          <Input
            onChange={this.handleChange}
            prefix={<Icon type="lock" />}
            type="password"
            name="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          {login ? (
            <a
              style={{ margin: 0 }}
              onClick={() => this.setState({ login: !login })}
            >
              Need to register?
            </a>
          ) : (
            <a
              style={{ margin: 0 }}
              onClick={() => this.setState({ login: !login })}
            >
              Need to log in?
            </a>
          )}
        </FormItem>
        <Mutation
          mutation={LOGIN_MUTATION}
          variables={{ email, password }}
          refetchQueries={[{ query: ME_QUERY }]}
        >
          {(loginMutation, { loading, error }) => (
            <div>
              {login ? (
                <Button
                  type="primary"
                  block
                  onClick={async e => {
                    e.preventDefault()
                    const { data: { login: { token } } } = await loginMutation()
                    localStorage.setItem('AUTH_TOKEN', token)
                    this.props.history.push('/')
                    // this.setState({ visible: false })
                    window.location.reload()
                    // console.log(token)
                  }}
                >
                  Log in
                </Button>
              ) : (
                <Button type="primary" block>
                  Register
                </Button>
              )}
            </div>
          )}
        </Mutation>
      </ModalWrapper>
    )
  }
}

export default withRouter(LogInModal)

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`
