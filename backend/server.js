const express = require('express')
const blogposts = require('./data/blogposts')
const notes = require('./data/notes')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/blogposts', (req, res) => {
  res.json(blogposts)
})
app.get('/api/blogposts/:id', (req, res) => {
  const blogpost = blogposts.find((p) => p._id === req.params.id)
  res.json(blogpost)
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})
app.get('/api/notes/:id', (req, res) => {
  const note = note.find((p) => p._id === req.params.id)
  res.json(note)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
