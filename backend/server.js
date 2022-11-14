const express = require('express')
const blogposts = require('./data/blogposts')

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

app.listen(5000, console.log('Server running on port 5000'))
