import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
                <Grid item  sx={{ color: "white"}}>
                    <h1>MUSIC LIST</h1>
                </Grid>
            </Grid>
        </>
    );
};

export default Contents;
