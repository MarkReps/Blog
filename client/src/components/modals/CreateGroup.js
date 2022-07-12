import React, {useState} from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createGroup } from '../../http/group.axios';


const CreateGroup = ({show,onHide})=>{
    
    const [value,setValue] = useState('')

    const addGroup = ()=>{
        createGroup(value).then(data =>{
            console.log(data)
            setValue('')
            onHide()
        })
    }

    const changeHandler = event =>{
        setValue(event.target.value)
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Создание группы</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={changeHandler}
                        placeholder="Введите название группы"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addGroup}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}


export default CreateGroup;