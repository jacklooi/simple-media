import PropTypes from 'prop-types'
import React from 'react'
import Video from '../../components/video'

const Watch = ({uid}) => {
  return (
    <div className='container is-max-widescreen'>
      <h3 className='title py-5'>{uid}</h3>
      <Video source={`/api/v1/media/${uid}`}/>
    </div>
  )
}

Watch.propTypes = {
  uid: PropTypes.string,
}

export default Watch