import React from "react";
import Main from "./layout/main";

function App() {
    return (
      <Main helloworld="helloworld" somelist={[1,2,true,false,3]}></Main>
    );
}

export default App;
