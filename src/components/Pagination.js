import React from "react";

const Pagination = props => {
    const sample = props.sample;
    const pages = [];

    for (let i = 1; i <= sample.length / 5; i++) {
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
