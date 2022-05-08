import React from "react";
import Header from "./components/header.js";
import Content from "./components/contents.js";
import Footer from "./components/footer.js";

import Grid from "@mui/material/Grid";

const Main = () => {
    return (
        <Grid container direction="column" >
            <Grid item>
                <Header />
            </Grid>
            <Grid item >
                <Content />
            </Grid>
            {/* <Grid item>
                <Footer />
            </Grid> */}
        </Grid>
    );
};

export default Main;
