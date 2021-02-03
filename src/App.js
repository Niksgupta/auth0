import React from "react";
import GetButton from "./components/GetButton";
import Logout from "./components/Logout"
import Profile from "./components/Profile"
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const {isLoading} = useAuth0();

  if(isLoading){
    return(
      <div>
        Loadingg.....
      </div>
    )
  }
  return (
    <div className="App">
      <GetButton />
      <Logout />
      <Profile />
    </div>
  );
}

export default App;
