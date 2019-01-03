import React from 'react'
import './MeetupDetails.css'

const MeetupDetails = ({meetup, onBack}) => {

  let mapLink = ''
  let venueName = 'N/A'
  let venueAddress = ''
  if (meetup.venue) {
    mapLink = 'http://www.google.com/maps/place/' + meetup.venue.lat + ',' + meetup.venue.lon
    venueName = meetup.venue.name
    venueAddress = meetup.venue.address_1 + ' ' + meetup.venue.city
  }

  return <div>

    {meetup.yes_rsvp_count} people are going
    
  </div>
}

export default MeetupDetails
