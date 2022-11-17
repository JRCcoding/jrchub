import express from 'express'
import connectDB from './config/db.js'
import notes from './data/notes.js'
import dotenv from 'dotenv'
import blogRoutes from './routes/blogRoutes.js'
import noteRoutes from './routes/noteRoutes.js'

dotenv.config()

const app = express()
connectDB()
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
}

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/blogposts', blogRoutes)
app.use('/api/notes', noteRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
