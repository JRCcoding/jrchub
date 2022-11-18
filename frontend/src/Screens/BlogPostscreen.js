import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import Navigation from '../Components/Navigation'
import axios from 'axios'
import { Link } from 'wouter'

// import { Link } from 'wouter'
// import { Button, Container } from 'react-bootstrap'

const BlogPostscreen = () => {
  const [blogpost, setBlogpost] = useState()

  useEffect(() => {
    const fetchBlogpost = async () => {
      const { data } = await axios.get('/api/blogposts:id')

      setBlogpost(data)
    }
    fetchBlogpost()
  })
  return (
    <div>
      <Navigation />
      <Container>
        <Link href='/Blogscreen'>
          <Button variant='dark'>Back</Button>
        </Link>
      </Container>
      <Row>
        <Col>
          <h1>Testing {blogpost.content}</h1>
        </Col>
      </Row>
    </div>
  )
}

export default BlogPostscreen
