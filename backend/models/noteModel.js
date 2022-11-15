import mongoose from 'mongoose'

const noteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Note = mongoose.model('Note', noteSchema)

export default Note
