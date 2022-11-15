import React from 'react'
import Posts from '../Components/Posts'
import Navigation from '../Components/Navigation'
import { Link } from 'wouter'
import { Button, Container } from 'react-bootstrap'

const Blogscreen = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Link href='/'>
          <Button variant='dark'>Home</Button>
        </Link>
      </Container>
      <Posts />
    </div>
  )
}

export default Blogscreen
