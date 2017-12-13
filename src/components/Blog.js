import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

const Blog = ({ id, name, author, content, dispatch }) => (
  <li>
    Title: {name} By: {author} Post: {content} 
    <Button color='red' onClick={() => 
      dispatch({ type: 'DELETE_POST', id }) }>Delete</Button>
    <Button color='blue' >Edit</Button>
  </li>
)

export default connect()(Blog)