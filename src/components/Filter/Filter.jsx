import React from 'react';
const Filter = ({ filter, onChange }) => {
    return (
        <input
            type="text"
            name="filter"
            value={filter}
            placeholder="Search by contacts"
             onChange={onChange}
        />
    );
};
export default Filter;
