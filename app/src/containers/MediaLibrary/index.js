import React from 'react'
import _ from 'lodash'
import useFetch from './hooks'
import VideoThumbnail from '../../components/videoThumbnail'

const MediaLibrary = () => {
  const { isLoading, videos } = useFetch()
  const libraryMap = videos.map((video) => 
    <div className='column is-4'>
      <VideoThumbnail name={video.name} uri={video.uri} />
    </div>
  )
  const library = _.isEmpty(videos) ?
    <p>Nothing here</p> :
    <div className='columns is-multiline is-centered'>
      {libraryMap}
    </div>

  return (
    <div className='container is-max-widescreen'>
      <h3 className='title py-5'>Media Library</h3>
      <a href={'/upload'} className='button mb-5'>Add Media</a>
      {isLoading ? <p>Loading...</p> : library}
    </div>
  )
}

export default MediaLibrary