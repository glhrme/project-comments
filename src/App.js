import React, { useState } from 'react';

import Comments from './Components/Comments.js';
import NewComment from './Components/NewComment.js';

import { database } from './Services/firebase.js';

class App extends React.Component {

  state = {
    comments: {},
    isLoading: false
  }

  sendComment = comment =>{
    
    //UM ID NOVO
    const id = database.ref().child('comments').push().key;

    const comments = {};
    comments['comments/'+id] = {
      comment
    }

    database.ref().update(comments);

    // this.setState({
    //   comments: [...this.state.comments, comment],
    // });
  }

  componentDidMount(){
    this.setState({ isLoading: true })
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }
  
  render(){
    return (
      <div>
        {/* NewComment */}
        <NewComment sendComment={this.sendComment}/>
        {/* Comments */}
        <Comments comments={this.state.comments}/>
        {/* Conditional Rendering */}
        {
          this.state.isLoading && <p>Carregando...</p>
        }
      </div>
    );
  }
}

export default App;
