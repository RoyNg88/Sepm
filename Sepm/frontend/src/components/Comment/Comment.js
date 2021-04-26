import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
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
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  }

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  }

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  }
  render(){
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {likes}
        </span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {dislikes}
        </span>
      </span>,
      <span>Reply to</span>,
    ];
    return(
  <Comment.Group>
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