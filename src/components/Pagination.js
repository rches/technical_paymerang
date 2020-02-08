import React from "react";

const Pagination = props => {
    const sample = props.sample;
    return (
        <ul>
            {sample.map((el, i) => {
                return (
                    <div>
                        <li key={i + 1}>
                            <button
                                onClick={props.handlePageSelect}
                                value={i + 1}
                            >
                                {i + 1}
                            </button>
                        </li>
                    </div>
                );
            })}
        </ul>
    );
};

export default Pagination;
