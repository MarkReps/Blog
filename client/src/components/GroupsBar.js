import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";

import { Context } from "..";


const GroupsBar = observer(() =>{

    const {store} = useContext(Context)
    
    const selectHandler = (id) =>{
        store.postStore.SelectedGroup = id
    }
    return(
        <ListGroup>
        {store.postStore.Groups.map(group =>{
            return <ListGroup.Item 
                active={group.id === store.postStore.SelectedGroup} 
                onClick={()=>selectHandler(group.id)} 
                key={group.id}>{group.name}
            </ListGroup.Item>
        })}
        </ListGroup>
    )
})

export default GroupsBar;