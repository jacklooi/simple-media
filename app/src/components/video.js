import PropTypes from 'prop-types'
import React from 'react'

const Video = ({source}) => {
  return (
    <figure className='videowrapper'>
      <video controls>
        <source src={`http://localhost:3080${source}`} type='video/mp4'/>
      </video>
    </figure>
  )
}

Video.propTypes = {
  source: PropTypes.string,
}

export default Video