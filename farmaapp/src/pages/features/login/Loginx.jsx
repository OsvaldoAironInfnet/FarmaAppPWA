import { ButtonComponent, TextFieldComponent, BoxComponent, StackComponent, AuthTopComponent } from "../../../components";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { Button, InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";
import { login, resendEmail, verifyLogin } from "../../../utils/auth";

const LoginScreen = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {

    const navigate = useNavigate();
    const [showResendEmail, setShowResendEmail] = useState(false);

    const [email, setEmail] = useState("exampleemail@gmail.com");
    const [password, setPassword] = useState("");

    async function entrarNoApp() {
        await login(firebaseApp, { email, password }, navigate, setShowResendEmail)
    }


    async function _resendEmail() {
        await resendEmail(firebaseApp, { email, password }, setShowResendEmail);
    }

    useEffect(() => {
        setCurrentPath(window.location.pathname)
    }, []);


    return <>
        <div
            style={{ backgroundColor: '#383737' }}
        >
            <AuthTopComponent title_page={'Bem-vindo'} subtitle_page={'Efetue login para entrar...'} />
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined style={{
                                    color: "#fff"
                                }} />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled" fullWidth={true} label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
            </BoxComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb: 1, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlined style={{
                                    color: "#fff"
                                }} />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled" fullWidth={true} label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            </BoxComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 0, mb: 0, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <StackComponent sx={{ mt: 0, mb: 0 }} alignItems={'end'}>
                    <Link style={{
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontWeight: '200 !important',
                        fontSize: 16
                    }} to="/recovery-password">Esqueceu a senha?</Link>
                </StackComponent>
            </BoxComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 1, mb: 3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <ButtonComponent
                    startIcon={<LoginIcon sx={{ color: '#fff' }} />}
                    fullWidth={true}
                    label="Entrar" onClick={entrarNoApp} />
            </BoxComponent>
            {showResendEmail ?
                <BoxComponent
                    component="div"
                    sx={{ mt: 3, mb: 3, pl: 4, pr: 4 }}
                    noValidate={true}
                    autoComplete={"off"}
                >
                    <ButtonComponent
                        startIcon={<LoginIcon sx={{ color: '#fff' }} />}
                        fullWidth={true}
                        label="Reenviar e-mail" onClick={_resendEmail} />
                </BoxComponent>
                : null}

            <StackComponent sx={{ mt: 4, mb: 4 }} alignItems={'center'}>
                <Link style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '200 !important',
                    fontSize: 16
                }} to="/register">Cadastrar-me</Link>
            </StackComponent>
        </div>
    </>
}

export default LoginScreen;