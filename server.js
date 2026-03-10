import express from 'express'
import 'dotenv/config'
import {MongoClient} from 'mongodb'

const connectionString = process.env.MONGO_URI
const client = new MongoClient(connectionString)
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

async function run() {
  try {
    await client.connect()
    await client.db("admin").command({ ping: 1});
    console.log("Connected successfully to MongoDB!")
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

const port = 3000

app.listen(port, () => {
  console.log('Listening on port:' + port)
})

