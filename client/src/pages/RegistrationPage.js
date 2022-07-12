import React, { useContext, useState } from "react";
import {Form,Button, Card, Container} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {observer} from 'mobx-react-lite';

import { Context } from "..";
import { registerUser } from "../http/user.axios";
import { HOME_ROUTE } from "../utils/consts";


const RegistrationPage = observer(()=> {

    const navigate = useNavigate()
    const {store} = useContext(Context)

    const [form,setForm] = useState({
        email:'',password:'',name:''
    })

    const changeHandler = event =>{
        setForm({...form,[event.target.name]:event.target.value})
    }

    const regisrerHandler = () =>{
        registerUser(form).then(data =>{
            store.userStore.isAuth = true;
            store.userStore = data;
            navigate(HOME_ROUTE)
        })
        
    }

    return(
        <Container 
            className="d-flex justify-content-center align-items-center">
            <Card
            className="p-3 m-5">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email"
                            name="email" 
                            placeholder="Enter email"
                            onChange={changeHandler}
                             />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control                                
                            type="password"
                            name="password" 
                            placeholder="Password" 
                            onChange={changeHandler}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={()=>regisrerHandler()}>
                            Registration
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
})

export default RegistrationPage;