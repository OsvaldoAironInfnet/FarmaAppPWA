import { ButtonComponent, TextFieldComponent, BoxComponent, StackComponent, AuthTopComponent} from "../../../components";
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthTopHomeComponent} from "./components/index"

const HomeScreen = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
  
    const navigate = useNavigate();
    
    useEffect(() => {
      setCurrentPath(window.location.pathname)
  }, []);


  return <> 
  <div
    style = {{backgroundColor: '#383737'}}
  >
    <AuthTopHomeComponent />
  </div>
</>
}

export default HomeScreen;