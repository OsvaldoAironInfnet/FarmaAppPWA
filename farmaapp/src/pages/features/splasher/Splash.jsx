import { ButtonComponent, TextFieldComponent, BoxComponent, StackComponent } from "../../../components";
import logo from '../../../assets/logo.png'
import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";

const SplashScreen = ({setCurrentPath}) => {

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
    }, [])

    useEffect(() => {
        
        setTimeout(()=>{
            navigate('/login')
           }, 4000)
    }, [])


    return <>
            <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#383737'
      }}
    >
      <img src={logo} alt="Farma App Logo" height={240} width={240} />
    </div>
    </>
}

export default SplashScreen;