import React, { useState } from 'react'
import { upload } from './request'
import InputFile from '../../components/inputFile'

const Upload = () => {
  const [state, setState] = useState({
    selectedVideo: null,
    selectedName: null,
    uploadCompleted: null,
  })

  const onChangeHandler = (event) => {
    setState({
      ...state,
      selectedVideo: event.target.files[0],
      selectedName: event.target.files[0].name,
    })
  }

  const onClickHandler = async (event) => {
    const result = await upload(state.selectedVideo)
    setState({
      ...state,
      uploadCompleted: result,
    })
  }

  return (
    <div className='container is-max-widescreen'>
      <h3 className='title py-5'>Upload Your Video</h3>
      <InputFile onChangeHandler={onChangeHandler} selectedName={state.selectedName} />
      <div className='control'>
        <button type='button' className='button is-primary is-light' onClick={onClickHandler} disabled={state.selectedName? false : true}>Upload</button>
      </div>
      <p>{state.uploadCompleted ? 'Upload Successful' : ''}</p>
    </div>
  )
}

export default Upload