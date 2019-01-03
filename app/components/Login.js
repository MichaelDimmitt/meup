import React from 'react'
import { toQs, parseQs } from '../../lib/queryString'

export default class Login extends React.Component {

  render() {
    const params = { 
      client_id: process.env.CLIENT_ID,
      response_type: 'token',
      redirect_uri: process.env.REDIRECT_URI 
    } 

    const url = 'https://secure.meetup.com/oauth2/authorize' + toQs(params)

    const style = {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return <div style={style}>
      <a href={url} >
        Login with Meetup
      </a>
    </div>
  }

}