import express, { Request, Response } from 'express'

const app = express()

app.get('/', (request: Request, response: Response) => {
    return response.json({
        message: 'Visual Nuts challenge'
    })
})


app.listen(3000)