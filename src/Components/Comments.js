import React from 'react';

import Comment from './Comment.js'

const Comments = ({comments}) => {
    const keys = Object.keys(comments);
    return(
    <div>
        {/* Comment */}
        { keys.map( key => { return <Comment c={comments[key]} /> })}
    </div>
    );
}

export default Comments;