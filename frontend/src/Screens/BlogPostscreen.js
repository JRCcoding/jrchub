import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import Navigation from '../Components/Navigation'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'

// import { Link } from 'wouter'
// import { Button, Container } from 'react-bootstrap'

const BlogPostscreen = ({ match }) => {
  const [blogpost, setBlogpost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchBlogpost = async () => {
      const { data } = await axios.get(`/api/blogposts/${id}`)

      setBlogpost(data)
    }
    fetchBlogpost()
  })
  return (
    <div>
      <Navigation />
      <Container>
        <LinkContainer to='/Blogscreen'>
          <Button variant='dark'>Back</Button>
        </LinkContainer>
        <Row>
          <Col>
            {blogpost.date}
            <br />
            {blogpost.name}
            <br />
            {blogpost.content}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogPostscreen
