import React, { useContext } from "react";
import {
    Link
} from "react-router-dom";
import { GlobalContext } from "../context/context";


function Nav() {
    const { state, dispatch } = useContext(GlobalContext);
    return (
        <nav>
            <ul>
              
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                
                

                
                  
                

            </ul>
        </nav>
    )
}

export default Nav;
