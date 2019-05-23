import React from 'react'

export default (props) => {
    const {title, body, id} = props.post;
    return (
        <div>
            <h1>{id} : {title}</h1>
            <p>{body}</p>
            
        </div>
    )
}