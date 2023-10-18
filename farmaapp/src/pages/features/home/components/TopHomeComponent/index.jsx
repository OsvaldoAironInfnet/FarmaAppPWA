import { AvatarComponent, TypographyComponent, BoxComponent, StackComponent, TopComponent, TextFieldComponent } from "../../../../../components";
import logo from '../../../../../assets/logo.png'
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Box, Button, InputAdornment } from "@mui/material";
import { SearchOffOutlined, SearchOutlined } from "@mui/icons-material";

const AuthTopHomeComponent = ({ title_page }) => {

    const [textSearch, setText] = useState("");

    return <BoxComponent
        style={{ backgroundColor: '#8C1422', width: '100%', height: 150 }}
    >
        <BoxComponent
            sx={{ pl: 16, pr: 4 }}
        >
            <table>
                <tr>
                    <td>
                        <br />
                        <br />
                        <img src={logo} alt="Farma App Logo" height={24} width={24} />
                    </td>
                    <td>
                        <br />
                        <br />
                        <TypographyComponent variant="h1" component="h1" sx={{
                            fontSize: 24,
                        }}>
                            {"Farma App"}
                        </TypographyComponent>
                    </td>
                </tr>
            </table>
        </BoxComponent>
        <Box
        >
            <TextFieldComponent
                style={{ backgroundColor: "#8C1422", width: '350px', paddingLeft: "20px", paddingRight: "20px" }}
                InputLabelProps={{
                    style: { color: '#fff' },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined style={{
                                color: "#fff"
                            }} />
                        </InputAdornment>
                    ),
                }}
                variant="filled" fullWidth={true} label="O que você procura?" value={textSearch} type="text" onChange={(e) => setText(e.target.value)} />
        </Box>
    </BoxComponent>
}

export default AuthTopHomeComponent;