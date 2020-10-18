import express from 'express'
import fileUpload from 'express-fileupload'
import bodyParser from 'body-parser'
import mediaRouter from './routes/media'
const app = express()
const port = process.env.PORT || 3080

app.use(fileUpload({
  createParentPath: true,
  limits: { 
    fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
  }
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/v1/media', mediaRouter)

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})