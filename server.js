import express from 'express'
import 'dotenv/config'
import {MongoClient} from 'mongodb'

const app = express()
const port = 3001
const connectionString = process.env.MONGO_URI
const client = new MongoClient(connectionString)

app.get('/', (req, res) => {
  try {
    await client
  }
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


app.listen(port, () => {
  console.log('Listening on port:' + port)
})

