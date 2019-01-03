import React from 'react'

import moment from 'moment'

const Meetups = ({ meetups, onSelect, isFetching }) => {

  const content = meetups.map((meetup, index) => {
    return <div key={index}>
        <button  onClick={(event) => onSelect(event, meetup.id)} style={{width:"100%"}}>
          <div>{meetup.name}</div>
          <div>{moment(meetup.time).fromNow()}</div>
        </button>
         
      </div>
  })

  return <div>
      <div>Upcoming</div>
      {isFetching ? <div>"loading..."</div> : content}
  </div>
}

export default Meetups


