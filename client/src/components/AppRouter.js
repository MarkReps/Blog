import React from "react";
import {Routes,Route} from "react-router-dom";

import {REGISTRATION_ROUTE,HOME_ROUTE, LOGIN_ROUTE,PROFILE_ROUTE,ADMIN_ROUTE} from '../utils/consts';
import RegistrationPage from "../pages/RegistrationPage";
import MainPage from "../pages/MainPage";
import LoginPage from '../pages/LoginPage';
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path={REGISTRATION_ROUTE} element={<RegistrationPage/>} />
            <Route path={HOME_ROUTE} element={<MainPage/>} />
            <Route path={LOGIN_ROUTE} element={<LoginPage/>}/>
            <Route path={PROFILE_ROUTE} element={<ProfilePage/>}/>
            <Route path={ADMIN_ROUTE} element={<AdminPage/>}/>
            <Route path="*" element={<MainPage/>}/>
        </Routes>
    )
}


export default AppRouter;
