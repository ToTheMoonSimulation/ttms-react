import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { PropaneSharp } from "@mui/icons-material";

import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

const Chart = ({ tickets }) => {
    const chartDiv = useRef();
    useEffect(() => {
        
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
        };
    }, []);
    return (
        <Card sx={{ minWidth: 275, margin: "10px" }}>
            <Grid
                container
                flexWrap="nowrap"
                direction="column"
                alignItems="center"
            >
                <h1 ref={chartDiv}>dd</h1>
                {tickets.map((item) => {
                    return <h1>{item}</h1>;
                })}
            </Grid>
        </Card>
    );
};

export default Chart;
