import React from "react";
import "./App.css";
import Header from "./components/Header";
import CustomerCard from "./components/CustomerCard";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
const sample = require("./data/sample.json");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            activeData: [],
            filterData: [],
            filterWord: ""
        };
    }
    handlePageSelect = e => {
        e.preventDefault();
        this.setState({ activePage: e.target.value });
    };

    makePage = (arr, perPage, whatPage) => {
        return arr.slice((whatPage - 1) * perPage, whatPage * perPage);
    };

    filterHandleChange = e => {
        this.setState({ filterWord: e });
    };

    componentDidUpdate(prevProps, prevState) {
        let filterArray;
        if (this.state.filterWord !== prevState.filterWord) {
            filterArray = sample.filter(el =>
                el.Payee.Name.includes(this.state.filterWord.toUpperCase())
            );
            console.log(filterArray);

            this.setState({
                activePage: 1,
                activeData: this.makePage(filterArray, 5, this.state.activePage)
            });
        }

        if (this.state.activePage !== prevState.activePage) {
            this.setState({
                activeData: this.makePage(sample, 5, this.state.activePage)
            });
        }
    }

    componentDidMount() {
        this.setState({
            activeData: this.makePage(sample, 5, this.state.activePage)
        });
    }

    render() {
        return (
            <div className="app__">
                <Header />
                <Filter filterHandleChange={this.filterHandleChange} />
                <Pagination
                    sample={sample}
                    handlePageSelect={this.handlePageSelect}
                />
                <div className="custContainer__">
                    {this.state.activeData.map((el, i) => {
                        return (
                            <div className="eachBody__" key={i}>
                                <CustomerCard sample={el} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;
