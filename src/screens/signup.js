import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';
import { useHistory } from 'react-router';
import { auth, createUserWithEmailAndPassword} from '../configs/firebase';

function Snacks() {
    let history = useHistory()
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const register = async () => {
        try {
           
            let { user } = await createUserWithEmailAndPassword(auth, email, password);
           history.push('/home')

        } catch (err) {
            
        }
    }

    return (
        <div>
            <h1>Hello Signup</h1>
            <label>Email<input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label>
            <label>Password<input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label>
           <button onClick={register}>Register</button>
        </div>
    )
}

export default Snacks;