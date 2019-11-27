import React from 'react';

// Pure Functions
const Comment = ({c}) =>{

    let comment = 'vazio'
    let email = 'Ninguém'

    if(c){
        if(c.comment)
            comment = c.comment

        if(c.email)
            email = c.email
    }

    return (
        <div>
            {email} comentou:<br/> <strong>{comment}</strong>
            <hr/>
        </div>
    )
}

export default Comment;