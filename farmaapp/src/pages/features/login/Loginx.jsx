import { ButtonComponent, TextFieldComponent, BoxComponent, StackComponent } from "../../../components";
import logo from '../../../assets/logo.png'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { Button, InputAdornment } from "@mui/material";
import { AccountCircleOutlined, CameraAlt } from "@material-ui/icons";

const LoginScreen = ({setCurrentPath}) => {


    const navigate = useNavigate();
    const [emailField, setEmailField] = useState(null);
    const [passwordField, setPasswordField] = useState(null);

    useEffect(() => {
      setCurrentPath(window.location.pathname)
  }, []);

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
      <StackComponent justifyContent="center" alignItems="center" style={{
                position: 'relative'
            }}>
                <img src={logo} alt="Farma App Logo" height={140} width={140} />

                <TextFieldComponent
                    InputProps={{
                        style: {
                          color: "white"
                        },
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined style={{
                                    color: "#333"
                                }}/>
                            </InputAdornment>
                            ),
                      }}
                    variant="filled" fullWidth={true} label="Email" value={emailField} type="text" onChange={(e) => setEmailField(e.target.value)}/>

            <br/>
            <br/>

            <TextFieldComponent
                    InputProps={{
                      style: {
                        color: "white"
                      },
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined style={{
                                    color: "#333"
                                }}/>
                            </InputAdornment>
                            ),
                      }}
                    variant="filled" fullWidth={true} label="Senha" value={passwordField} type="text" onChange={(e) => setPasswordField(e.target.value)}/>
            </StackComponent>
    </div>
    </>
}

export default LoginScreen;