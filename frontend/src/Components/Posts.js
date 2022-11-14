import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { blogposts } from '../data.js'

const Posts = () => {
  return (
    <div>
      <h2>Blog Posts:</h2>
      {blogposts.map((blogpost) => (
        <div className='blogposts' key={blogpost}>
          <Row>
            <Col>{blogpost.date}</Col>
            <Col>{blogpost.name}</Col>
            <Col>{blogpost.content}</Col>
          </Row>
        </div>
      ))}
    </div>
  )
}

export default Posts
