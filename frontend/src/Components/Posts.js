import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { Link } from 'wouter'

// import { blogposts } from '../data.js'

const Posts = ({ blogpost }) => {
  const [blogposts, setBlogposts] = useState()

  useEffect(() => {
    const fetchBlogposts = async () => {
      const { data } = await axios.get('/api/blogposts')

      setBlogposts(data)
    }
    fetchBlogposts()
  })
  return (
    <Container>
      <div>
        <h2>Blog Posts:</h2>
        <Row>
          <Col>
            <h3>Date:</h3>
          </Col>
          <Col>
            <h3>Title:</h3>
          </Col>
          <Col>
            <h3>Content:</h3>
          </Col>
        </Row>
        {blogposts &&
          blogposts.reverse().map((blogpost) => (
            <div className='blogposts' key={blogpost}>
              <Row>
                <Col>{blogpost.date}</Col>
                <Col>{blogpost.name}</Col>
                <Col>
                  <Link href={`/blogposts/${blogpost._id}`}>
                    {blogpost.content.substring(0, 15)}...{' '}
                  </Link>
                </Col>
              </Row>
            </div>
          ))}
      </div>
    </Container>
  )
}

export default Posts
