import React, { useState } from 'react';
import Comments from './Components/Comments.js';

class App extends React.Component {

  state = {
    newComment: '',
    comments: [
      'Comentário 1',
      'Comentário 2'
    ]
  }

  sendComment = () =>{
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ''
    });
  }

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  }
  
  render(){
    return (
      <div>
        {/* NewComment */}
        <div>
          <textarea 
          value={this.state.newComment}
          onChange={this.handleChange}
          ></textarea>
          <button onClick={this.sendComment}>Enviar</button>
        </div>
        {/* Comments */}
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
