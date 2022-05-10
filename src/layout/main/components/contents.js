import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
//import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import Chart from "./chart";

import waveSvg from "../../../assets/wave.svg";
const Contents = () => {
    const onClickPlay = () => {
        console.log("A");
    };

    useEffect(() => {
        console.log("useEffect");
        axios
            .get("/api/users/test")
            .then((Response) => {
                console.log(Response.data);
            })
            .catch((Error) => {
                console.log(Error);
            });

        const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
        ws.binaryType = "arraybuffer";
        ws.onopen = () => {
            var msg = [
                {
                    ticket: "TEST",
                },

                {
                    type: "ticker",
                    codes: ["KRW-BTC", "KRW-DOGE", "KRW-ETH"],
                    isOnlyRealtime: true,
                },
            ];
            msg = JSON.stringify(msg);
            ws.send(msg);
        };
        ws.onmessage = (e) => {
            var enc = new TextDecoder("utf-8");
            var arr = new Uint8Array(e.data);
            var data = JSON.parse(enc.decode(arr));
            //console.log(data);
        };
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
        };
    }, []);

    return (
        <>
            {/* 서비스 소개 */}
            <Grid
                container
                flexWrap="nowrap"
                direction="column"
                alignItems="center"
                sx={{
                    backgroundImage: `url(${waveSvg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "500px",
                }}
            >
                <Grid item sx={{ color: "white", textAlign: "center" }}>
                    <h1>Investment Game For Crypto Currency💸</h1>
                    <h1>Try Free</h1>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        endIcon={<PlayArrowIcon />}
                        onClick={onClickPlay}
                    >
                        Play
                    </Button>
                </Grid>

                <Grid Item>
                    <Chart tickets={["KRW-BTC", "KRW-DOGE", "KRW-ETH"]}></Chart>
                </Grid>
            </Grid>
        </>
    );
};

export default Contents;
