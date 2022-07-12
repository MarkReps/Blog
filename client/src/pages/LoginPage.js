import React, { useContext, useState } from "react";
import {Form,Button, Card, Container} from 'react-bootstrap';
import { loginUser } from "../http/user.axios";
import { Context } from "..";
import {observer} from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";

const LoginPage = observer(()=> {

    const navigate = useNavigate()
    const {store} = useContext(Context)

    const [form,setForm] = useState({
        email:'',password:''
    })

    const changeHandler = event =>{
        setForm({...form,[event.target.type]:event.target.value})
    }

    const loginHandler = async () =>{
        const data = await loginUser(form)
        store.userStore.user = data;
        store.userStore.user.isAuth=true;
        navigate(HOME_ROUTE)

    }
    return(
        <Container 
            className="d-flex justify-content-center align-items-center">
            <Card
            className="p-3 m-5">
                <Card.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            onChange={changeHandler}
                             />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control                                
                            type="password" 
                            placeholder="Password" 
                            onChange={changeHandler}
                            />
                        </Form.Group>
                        <Button variant="outline-success" onClick={()=>loginHandler()}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
})

export default LoginPage;