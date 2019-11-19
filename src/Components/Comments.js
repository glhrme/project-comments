import React, { Component } from 'react';

import Comment from './Comment.js'

class Comments extends Component{
    render(){
        const keys = Object.keys(this.props.comments);
        return(
        <div>
            {/* Comment */}
            { keys.map( key => { return <Comment comment={this.props.comments[key]} /> })}
        </div>
        );
    }
}

export default Comments;