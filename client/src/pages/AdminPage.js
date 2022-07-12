import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import CreateGroup from "../components/modals/CreateGroup";



const AdminPage = () =>{
    
    const [groupVisible,setGroupVisible] = useState(false)

    return(
        
            <Container className="d-flex flex-column" style={{width:'600px'}}>
                <Button
                variant='outline-dark'
                className="mt-4 p-2"
                onClick={()=>setGroupVisible(true)}
                >
                    Добавить групу
                </Button>
                <CreateGroup show={groupVisible} onHide={()=>setGroupVisible(false)}/>
            </Container>
            
        
    )
}

export default AdminPage;