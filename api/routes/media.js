import express from 'express'
import { get, getList, upload } from '../controllers/mediaController'

const mediaRouter = express.Router()

mediaRouter.use(function timeLog (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Method', 'GET,POST')
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    // res.setHeader('Content-Type', 'application/json')
    next()
});

mediaRouter.post('/', upload)
mediaRouter.get('/', getList)
mediaRouter.get('/:uid', get)

export default mediaRouter