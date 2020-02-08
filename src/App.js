import React from "react";
import "./App.css";
const sample = require("./data/sample.json");

function App() {
    return (
        <div className="App">
            A clean template is a happy template.
            <div>{sample[0].Payee.Name}</div>
        </div>
    );
}

export default App;
