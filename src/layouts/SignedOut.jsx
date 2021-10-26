import React from 'react'
import { Button } from 'semantic-ui-react'


export default function SignedOut({signIn}) {
    return (
        <div>
            <Button onClick = {signIn} >Sign in</Button>
            <Button primary style = {{marginLeft:"0.5em"}}>Log in</Button>
            
            
        </div>
    )
}
