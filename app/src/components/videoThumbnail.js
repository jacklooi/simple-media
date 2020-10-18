import PropTypes from 'prop-types'
import React from 'react'
import Video from './video'

const VideoThumbnail = ({name, uri}) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <Video source={uri}/>
      </div>
      <a href={`/watch/${name}`}>
        <div className='card-content'>
          <div class='content'>
            {name}
          </div>
        </div>
      </a>
    </div>
  )
}

VideoThumbnail.propTypes = {
  name: PropTypes.string,
  uri: PropTypes.string,
}

export default VideoThumbnail