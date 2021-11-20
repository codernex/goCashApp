import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


const app = express()

//Allow Access Control Origin
app.use(cors())

//Initializing Dotenv
dotenv.config()

//Parsing JSON Data & Query Data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Creating Route




//Listening Server

app.listen(process.env.PORT, () => {
    
})