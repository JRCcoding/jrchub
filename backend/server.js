const express = require('express')
const blogposts = require('./data/blogposts')
const notes = require('./data/notes')

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

app.listen(5000, console.log('Server running on port 5000'))
