import React from "react";

const Pagination = props => {
    const sample = props.sample;
    const pages = [];
    const niceNumber = Math.ceil(sample.length / 5);

    for (let i = 1; i <= niceNumber; i++) {
        pages.push(i);
    }

    return (
        <ul className="nav__">
            {pages.map(i => {
                return (
                    <li key={i}>
                        <button
                            className="navButton"
                            onClick={props.handlePageSelect}
                            value={i}
                        >
                            {i}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
