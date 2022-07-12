import React, { useEffect, useState,useContext } from "react";
import { Button, Card, Container, Form, } from "react-bootstrap";
import {observer} from 'mobx-react-lite';

import {Context} from '..';
import Loader from "../components/Loader";
import { createPost } from "../http/post.axios";
import {getGroups} from '../http/group.axios';


const ProfilePage = observer(() => {

    const {store} = useContext(Context)
    
    const [form,setForm] = useState({
        name:'',
        text:'',
        group:store.postStore?.Groups,
        tags:''
    })

    const changeHandler = event =>{
        setForm({...form,[event.target.name]:event.target.value})
        }


    const createPostHandler = () =>{
        createPost(form).then(data => {})
    }

    useEffect(()=>{
        getGroups().then(data => {
            store.postStore.Groups = data    
        })
        store.isLoading = false;

    },[store,store.isLoading])

    if(store.isLoading){
        return (<Loader/>)
    }

    return(
        <Container className='d-flex justify-content-center align-items-center'>
            <Card style={{width:'75%',height:'75%',marginTop:'50px'}}>
                <Card.Title>Create Post</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" style={{width:'400px'}}>
                                <Form.Label>Post Name</Form.Label>
                                <Form.Control
                                
                                type="text"
                                name="name" 
                                placeholder="Enter Post Name"
                                onChange={changeHandler}
                                />
                        </Form.Group>
                        <Form.Label htmlFor="select">Post Group</Form.Label>
                        <Form.Select 
                            className="mb-3" 
                            style={{width:'200px'}}
                            aria-label="Default select example"
                            name="group"
                            onChange={changeHandler}
                            >
                            {store.postStore.Groups.map(elm =>{
                                return <option key={elm.id}>{elm.name}</option>
                            })}
                        </Form.Select>
                        <Form.Group className="mb-3" style={{width:'400px'}}>
                                <Form.Label>Post tags</Form.Label>
                                <Form.Control
                                
                                type="text"
                                name="tags" 
                                placeholder="Enter tags"
                                onChange={changeHandler}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3">
                                <Form.Label>Post Text</Form.Label>
                                <Form.Control 
                                style={{height:'300px'}}
                                type="text"
                                name="text" 
                                placeholder="Enter text"
                                as='textarea'
                                onChange={changeHandler}
                                />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Button className='mb-3' style={{width:"200px"}} onClick={()=>createPostHandler()}>Create Post</Button>
            </Card>
        </Container>
    )
})

export default ProfilePage;


/*
<Form.Select 
                            aria-label="Default select example"
                            name="group"
                            onChange={changeHandler}
                            >
                            {groups.map(elm =>{
                                return <option value={elm}>{elm}</option>
                            })}
                        </Form.Select>
                        */