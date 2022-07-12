import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { check } from "./http/user.axios";

import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar";

const App =()=> {

  const {store} = useContext(Context)

  useEffect(()=>{
    check().then(data =>{
      store.userStore.user = data;
      store.userStore.isAuth = true;
    }).catch(error =>{})

  },[store.userStore])

  return (
    <BrowserRouter >
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

// <AppRouter/>