import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';

import Signup from '../screens/signup';
import Signin from '../screens/signin';

import { auth, onAuthStateChanged} from './firebase';
import Home from "../screens/home";

export default function App() {


    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                   

                    
                                <Route path="/signup">
                                    <Signup />
                                </Route>
                                <Route path="/signin">
                                    <Signin />
                                </Route>
                                <Route path = "/home">
                                    <Home/>

                                </Route>
                            
                    

                    
                       
                    



                    
                </Switch>
            </div>
        </Router>
    );
}