import React from "react";

const Pagination = props => {
    const sample = props.sample;
    const navContent = [];
    const navLength = sample.length;

    for (let i = 1; i <= navLength; i++) {
        navContent.push(i);
    }

    return (
        <ul className="container__">
            {navContent.map(i => {
                return (
                    <li className="navItem__" key={i}>
                        <button onClick={props.handlePageSelect} value={i}>
                            {i}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
