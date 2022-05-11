import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { PropaneSharp } from "@mui/icons-material";

import ws from "../../../lib/ws"
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

const Chart = ({ tickets }) => {
    const chartDiv = useRef();
    useEffect(() => {
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



        waitForSocketConnection(ws, function(){
            console.log("message sent!!!");
            ws.send(msg);
        });

        ws.onmessage = (e) => {
            var enc = new TextDecoder("utf-8");
            var arr = new Uint8Array(e.data);
            var data = JSON.parse(enc.decode(arr));
            console.log(data);
        };
        
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
        };
    }, []);

    function waitForSocketConnection(socket, callback){
        setTimeout(
            function () {
                if (socket.readyState === 1) {
                    console.log("Connection is made")
                    if (callback != null){
                        callback();
                    }
                } else {
                    console.log("wait for connection...")
                    waitForSocketConnection(socket, callback);
                }
    
            }, 5); // wait 5 milisecond for the connection...
    }


    return (
        <Card sx={{ minWidth: 275, margin: "10px" }}>
            <Grid
                container
                flexWrap="nowrap"
                direction="column"
                alignItems="center"
            >
                {tickets.map((item, idx) => {
                    return <h1 key={idx}>{item}</h1>;
                })}
            </Grid>
        </Card>
    );
};

export default Chart;
