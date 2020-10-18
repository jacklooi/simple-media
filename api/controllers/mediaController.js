import fs from 'fs'
import { v4 } from 'uuid'

const getList = (req, res) => {
  const filePath = 'public/uploads'
  const files = fs.readdirSync(filePath)
  const items = files.map((file) => {
    return {
      name: file,
      uri: `/api/v1/media/${file}`,
    }
  })
  res.send({
    success: true,
    data: {
      files: items,
    },
  })
}

const get = (req, res) => {
  const uid = req.params.uid
  const filePath = 'public/uploads'
  const stat = fs.statSync(`${filePath}/${uid}`)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
    const chunksize = (end - start) + 1
    const stream = fs.createReadStream(`${filePath}/${uid}`, {start, end})
    const headers = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, headers)
    stream.pipe(res)
  } else {
    const headers = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, headers)
    fs.createReadStream(`${filePath}/${uid}`).pipe(res)
  }
}

const upload = async (req, res) => {
  if(!req.files) {
    res.send({
      success: false,
      message: 'No file uploaded',
    })
  } else {
    let mediaContent = req.files.media
    const fileName = v4()
    mediaContent.mv(`./public/uploads/${fileName}`)
    res.send({
      success: true,
      message: 'File is uploaded',
      data: {
        name: fileName,
        mimetype: mediaContent.mimetype,
        size: mediaContent.size,
      },
    })
  }
}

export { get, getList, upload }