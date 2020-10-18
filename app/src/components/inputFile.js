import PropTypes from 'prop-types'
import React from 'react'

const InputFile = ({onChangeHandler, selectedName}) => {
  return (
    <div className='file has-name is-centered pb-3'>
      <label className='file-label'>
        <input className='file-input' type='file' name='file' accept='video/mp4,video/x-m4v,video/*' onChange={onChangeHandler} />
        <span class="file-cta">
          <span class="file-label">
            Choose a file…
          </span>
        </span>
        <span class="file-name">
          {selectedName ? selectedName : 'No file uploaded' }
        </span>
      </label>
    </div>
  )
}

InputFile.propTypes = {
  onChangeHandler: PropTypes.func,
  selectedName: PropTypes.string,
}

export default InputFile