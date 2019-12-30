import * as express from 'express'
import { Application } from 'express'
import * as bodyParser from 'body-parser'
import Routes from './routes'

class Api {
    public express: Application

    constructor() {
        this.express = express.application

    }

    middlewares(): void {
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use(bodyParser.json())
        this.router(this.express)
    }

    private router(app: Application): void {
        new Routes(app)
    }
}

export default Api