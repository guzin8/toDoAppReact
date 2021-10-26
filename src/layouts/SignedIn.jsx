import React from 'react'
import { Button } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default function SignedIn({signOut}) {

    
    return (
        <div>

           <Button as = {NavLink} to = "/itemsList">Giriş başarılı, itemlarınızı listelemek için tıklayınız:</Button>

            <Button onClick= {signOut} >Log out</Button>

            
        </div>
    )
}
