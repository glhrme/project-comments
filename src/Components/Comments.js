import React, { Component } from 'react';

import Comment from './Comment.js'

class Comments extends Component{
    render(){
        return(
        <div>
            {/* Comment */}
            { this.props.comments.map( data => { return <Comment comment={data} /> })}
        </div>
        );
    }
}

export default Comments;