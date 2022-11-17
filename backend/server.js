import express from 'express'
import connectDB from './config/db.js'
import notes from './data/notes.js'
import dotenv from 'dotenv'
import blogRoutes from './routes/blogRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()
connectDB()

app.use('/api/blogposts', blogRoutes)
app.use('/api/notes', noteRoutes)
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running...')
//   })
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
