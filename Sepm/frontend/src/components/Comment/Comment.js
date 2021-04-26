import React, { Component } from 'react'
import { Button, Comment, Form, Header, Rating } from 'semantic-ui-react'
import axios from 'axios'

class Commentt extends Component{
  state = {
    comment: [],
  };

  componentDidMount() {
    axios.get(`https://6085a8f9d14a8700175781be.mockapi.io/comment/Usercomment`).then(res => {
      const comment = res.data;
      this.setState({ comment });
    });
  }

  render(){
    return(  
  <Comment.Group >
    <Header as='h3' dividing>
      Comments
    </Header>
    <ul>{this.state.comment.map(comment => (
    <Comment key={comment.id}>
      <Comment.Avatar src={comment.avatar} />
      <Comment.Content>
        <Comment.Author as='a'>{comment.name}</Comment.Author>
        <Comment.Metadata>
          <div>{comment.datetime}</div>
        </Comment.Metadata>
        <Comment.Text>{comment.content}</Comment.Text>
        <Comment.Actions>
        <Rating icon='star' defaultRating={3} maxRating={4} />
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment> 
    ))}
    </ul>
    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
    );
}
}

export default Commentt;