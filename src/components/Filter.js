import React, { useState } from "react";

const Filter = props => {
    const [filter, setFilter] = useState("");

    const handleFilter = e => {
        setFilter(e.target.value);
        props.filterHandleChange(e.target.value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="twelve columns">
                    <input
                        className="filter__ "
                        type="text"
                        id="filter"
                        value={filter}
                        onChange={handleFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filter;
