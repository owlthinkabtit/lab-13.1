import express from 'express'
import 'dotenv/config'
import {MongoClient} from 'mongodb'

const app = express()
const port = 3001
const connectionString = process.env.MONGO_URI
const client = new MongoClient(connectionString)

app.get('/', async (req, res) => {
  try {
    await client.connect()
    await client.db("admin").command({ ping: 1 })
    res.json({ message: "Successfully connected to the database!"})
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to connect to the database."})
  }
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

