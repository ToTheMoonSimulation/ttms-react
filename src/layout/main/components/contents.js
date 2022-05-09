import React from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import waveSvg from "../../../assets/wave.svg";
const Contents = () => {
    return (
        <>
            {/* 서비스 소개 */}
            <Grid
                container
                direction="column"
                alignItems="center"
                sx={{
                    backgroundImage: `url(${waveSvg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "500px",
                }}
            >
                <Grid item sx={{ color: "white", textAlign:"center"}}>
                    <h1>Investment Game For Crypto Currency💸</h1>
                    <h1>Try Free</h1>
                </Grid>
                <Grid item>
                    <Button variant="contained" endIcon={<PlayArrowIcon />}>
                        Play
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Contents;
