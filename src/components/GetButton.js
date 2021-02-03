import React from 'react'
import {useAuth0} from "@auth0/auth0-react";

const GetButton = ()=> {

    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
        <div>
            <button onClick={()=> loginWithRedirect()}>
                Get started
            </button>
        </div>
        )
    )
}

export default GetButton
