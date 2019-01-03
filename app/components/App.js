import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Meetups from './Meetups'
import MeetupDetails from './MeetupDetails'

import { toHome, toMeetupDetails } from '../actions'

function mapStateToProps(state) {
  console.info(state)
  return {
    meetups: state.meetups,
    meetup: state.meetup,
    route: state.route,
    session: state.session,
    isFetching: state.isFetching
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.show = this.show.bind(this);
    this.home = this.home.bind(this);
  }

  componentDidMount() {
  }

  show(event, id) {
    event.preventDefault() // workaround for ghostclick https://github.com/callemall/material-ui/issues/5070 
    this.props.dispatch(toMeetupDetails(id))
    window.location.hash = 'show/' + id
  }

  home(event) {
    event.preventDefault(); // workaround for ghostclick https://github.com/callemall/material-ui/issues/5070 
    this.props.dispatch(toHome())
    window.location.hash = 'home'
  }

  renderPage() {
    const { meetups, meetup, route, isFetching } = this.props
    switch (route.view) {
      case 'home':
        return <Meetups meetups={meetups} onSelect={this.show} isFetching={isFetching} />
      case 'show':
        return <MeetupDetails meetup={meetup} onBack={this.home} />
      case 'login':
        return <Login />
      default:
        return <Login />
    }
  }

  render() {
    return <div>
      {this.renderPage()}
    </div>
  }
}



export default connect(mapStateToProps)(App)
