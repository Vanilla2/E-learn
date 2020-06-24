import React, {useEffect, useState} from 'react';
import Login from "./login";
import Home from "./Home";
import CourseView from "./CourseView"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

const Index = () =>{
    const [logged, setLogged] = useState(false);
    const LogIn = () =>{
        setLogged(true);
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {logged ? <Redirect to = "/home"/> : <Redirect to = "/login"/>}
                </Route>
                <Route exact path="/login">
                    <Login logged = {logged} LogIn = {LogIn}/>
                </Route>
                <Route path="/home">
                    <Home logged = {logged} />
                </Route>
                <Route path = "/course/:id">
                    <CourseView logged = {logged}/>
                </Route>
            </Switch>
        </Router>
    );
    // const [logged, setLogged] = useState(true);
    // const LogIn = () =>{
    //     setLogged(true);
    // }
    // return(
    //     logged ? <Home/> : <Login LogIn = {LogIn}/>
    // )
}
export default Index;