import React from "react";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import Pagination from "./components/Pagination";
const sample = require("./data/sample.json");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activePage: 1, activeData: [] };
    }
    handlePageSelect = e => {
        e.preventDefault();
        this.setState({ activePage: e.target.value });
    };

    makePage = (arr, perPage, whatPage) => {
        return arr.slice((whatPage - 1) * perPage, whatPage * perPage);
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.activePage !== prevState.activePage) {
            this.setState({
                activeData: this.makePage(sample, 1, this.state.activePage)
            });
        }
    }

    componentDidMount() {
        this.setState({
            activeData: this.makePage(sample, 1, this.state.activePage)
        });
    }

    render() {
        return (
            <>
                <div className="container__">
                    <ul className="custArea__">
                        {this.state.activeData.map((el, i) => {
                            return (
                                <li className="custList__" key={i}>
                                    <CustomerCard sample={el} />
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="container__ navPos__">
                    <Pagination
                        sample={sample}
                        handlePageSelect={this.handlePageSelect}
                    />
                </div>
            </>
        );
    }
}

export default App;
