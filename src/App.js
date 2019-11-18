import React, { useState } from 'react';

import Comments from './Components/Comments.js';
import NewComment from './Components/NewComment.js';

class App extends React.Component {

  state = {
    newComment: '',
    comments: [
      'Comentário 1',
      'Comentário 2'
    ]
  }

  sendComment = comment =>{
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }
  
  render(){
    return (
      <div>
        {/* NewComment */}
        <NewComment sendComment={this.sendComment}/>
        {/* Comments */}
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
