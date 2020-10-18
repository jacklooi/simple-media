import axios from 'axios'

const upload = (media) => {
  const data = new FormData()
  data.append('media', media)
  return axios.post('http://localhost:3080/api/v1/media', data, {}).then(res => {
    return res.statusText
  })
}

export { upload }