import React from "react";

const Pagination = props => {
    const sample = props.sample;
    const navContent = [];
    const navLength = Math.ceil(sample.length / 6);

    for (let i = 1; i <= navLength; i++) {
        navContent.push(i);
    }

    return (
        <ul>
            {navContent.map(i => {
                return (
                    <li key={i}>
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
