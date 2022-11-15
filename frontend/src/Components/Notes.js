import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { Container } from 'react-bootstrap'

// import { blogposts } from '../data.js'

const Notes = () => {
  const [notes, setNotes] = useState()

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get('/api/notes')

      setNotes(data)
    }
    fetchNotes()
  })
  return (
    <Container>
      <div>
        <h2>Notes:</h2>
        {notes &&
          notes.map((note) => (
            <div className='notes' key={note}>
              <Row>
                <Col>{note.date}</Col>
                <Col>{note.name}</Col>
                <Col>{note.content}</Col>
              </Row>
            </div>
          ))}
      </div>
    </Container>
  )
}

export default Notes
