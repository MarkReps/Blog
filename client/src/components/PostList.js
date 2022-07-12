import React from 'react';

import {Card} from 'react-bootstrap';

const PostList = ({post}) =>{
    return(
        <Card>   
            <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
                <br/>
                <Card.Text>
                    {post.Tags.map((elm)=>{
                       return <p key={elm.id}>{elm.name}</p>
                    })}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PostList;

