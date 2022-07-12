import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";

import { Context } from "..";
import GroupsBar from "../components/GroupsBar";
import Loader from "../components/Loader";
import { getGroups } from "../http/group.axios";
import {getAllPost} from '../http/post.axios';
import PostCard from "../components/PostCard";

const MainPage = observer(()=> {
    
    const {store} = useContext(Context)

    useEffect(()=>{
        getGroups().then(data=>{
            store.postStore.Groups = data;
        })
        getAllPost(null).then(data => store.postStore.Posts = data)
        store.isLoading = false;
    },[store.postStore,store])

    useEffect(()=>{
        getAllPost(store.postStore.SelectedGroup).then(data => store.postStore.Posts = data)
    },[store.postStore.SelectedGroup,store.postStore])

    if(store.isLoading){
        return <Loader/>
    }

    return(
        <Container>
             <Row className="mt-2">
                <Col md={9}>
                    {store.postStore.Posts.map(post =>{
                        return <PostCard key={post.id} post={post}/>
                    })}   
                </Col>
                <Col md={3}>
                    <GroupsBar/>
                </Col>
            </Row>
            
        </Container>
    )
})

export default MainPage;