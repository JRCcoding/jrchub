import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Note from '../models/noteModel.js'

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const notes = await Note.find({})

    res.json(notes)
  })
)
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)

    if (note) {
      res.json(note)
    } else {
      res.status(404)
    }
  })
)

export default router
