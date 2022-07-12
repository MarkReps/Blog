import React from 'react';
import {Button,Spinner} from 'react-bootstrap';

const  Loader = () =>{
    return(
        <>
             <Button className="d-flex justify-content-center align-items-center" variant="primary" disabled>
                <Spinner 
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            </Button>
        </>
    )
}

export default Loader;