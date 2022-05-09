import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import Tooltip from "@mui/material/Tooltip";
import LogoImg from "../../../assets/logo.png";

const Header = () => {
    return (
        <header>
            <AppBar position="static" sx={{ bgcolor: "black" }}>
                <Toolbar>
                    {/* 로고 */}
                    <Box
                        component="img"
                        sx={{
                            width: 50,
                            height: 50,
                            marginRight: 2,
                        }}
                        alt="Your logo."
                        src={LogoImg}
                    />

                    {/* 서비스명 */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        To The Moon Simulation
                    </Typography>

                    {/* 로그인 버튼 */}
                    <Tooltip title="로그인">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <LoginIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
