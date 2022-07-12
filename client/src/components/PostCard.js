import React from 'react';

import {Card, ListGroup} from 'react-bootstrap';

const PostCard = ({post}) =>{
    return(
        <Card>   
            <Card.Body>
                <Card.Title>Вася пупкин</Card.Title>
                <h2>{post.name}</h2>
                <ListGroup horizontal >
                {post.Tags.map((elm)=>{
                       return  <ListGroup.Item key={elm.id}> {elm.name}</ListGroup.Item>
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default PostCard;

/*
<Card>
                        <Card.Body>
                            <Card.Title>
                                Вася пупкин
                            </Card.Title>
                            <Card.Text >
                                <h2>Тестовая статья</h2>
                                #gdfjgdfgdgdf 3dgdfgdfgfdgfdg #fdgdgfgdg
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    */