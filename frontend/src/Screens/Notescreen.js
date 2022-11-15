import React from 'react'
import Notes from '../Components/Notes'
import Navigation from '../Components/Navigation'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'wouter'

const Notescreen = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Link href='/'>
          <Button variant='dark'>Home</Button>
        </Link>
      </Container>
      <Notes />
    </div>
  )
}

export default Notescreen
