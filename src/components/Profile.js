import React from 'react'
import {useAuth0} from "@auth0/auth0-react";

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <div>
          <h3>INNN</h3>
          <h3>{user.name}</h3>        
       </div>
        )
    )
}

export default Profile
