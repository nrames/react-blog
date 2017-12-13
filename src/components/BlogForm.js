import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Form, Segment } from 'semantic-ui-react'

const BlogForm = ({ dispatch, nextId }) => {
 let input;
 let input2;
 let input3;

 return (
   <Segment inverted>
     <h3>Add Blog Post</h3>
     <Form inverted
       onSubmit={ e => {
         e.preventDefault();
         dispatch({ type: 'ADD_BLOG', 
         blog: { name: input.value, id: nextId, author: input2.value, content: input3.value }
         })
         dispatch({ type: 'INC_ID' })
         input.value = null;
       }}
     >
      <input placeholder="Title" ref={ n => input = n } />
      <br />
      <input placeholder="Author" ref={ n => input2 = n } />
      <br />
      <input placeholder="Content" ref={ n => input3 = n } />
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button primary type="submit">Submit</Button>
     </Form>
     <h3>All Blog Posts</h3>
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);