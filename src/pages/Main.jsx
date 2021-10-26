import React, {useState} from 'react'
import { useHistory } from 'react-router';
import SignedIn from '../layouts/SignedIn'
import SignedOut from '../layouts/SignedOut'

export default function Main() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const history =  useHistory()

    function handleSignOut(){
        setIsAuthenticated(false);
        history.push("/");

    }

    function handleSignIn(){
        setIsAuthenticated(true);
    }

    return (
        <div>
            Main Page 
           {isAuthenticated ? <SignedIn signOut = {handleSignOut}/>:<SignedOut signIn = {handleSignIn}/> }               
        </div>
    )
}
