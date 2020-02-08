import React from "react";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import Pagination from "./components/Pagination";
const sample = require("./data/sample.json");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activePage: 1 };
    }

    handlePageSelect = e => {
        e.preventDefault();

        this.setState({ activePage: e.target.value });
    };

    render() {
        return (
            <div className="App">
                <CustomerCard />

                <div>{this.state.activePage}</div>
                <ul>
                    {sample.map((el, i) => {
                        return <li key={i}>{el.Payee.Name}</li>;
                    })}
                </ul>
                <Pagination
                    sample={sample}
                    handlePageSelect={this.handlePageSelect}
                />
            </div>
        );
    }
}

export default App;
