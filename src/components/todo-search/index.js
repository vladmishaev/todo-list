import React from 'react';

import './index.css'

const Search = ({ funcSearch, funcFilter, actFilter }) => {

    const inpRadioSet = [
        { label: 'All', key: 'all' },
        { label: 'Activ', key: 'activ' },
        { label: 'Done', key: 'done' }
    ];

    const inpRadiCreat = inpRadioSet.map(({ label, key }) => {
        const idInput = `search-button-${key}`;
        const checkedInput = (key === actFilter) ? true : false;
        return (
            <div key={key}>
                <input type="radio" name="search-bottons"
                    id={idInput}
                    value={key}
                    onChange={(event) => funcFilter(event.target.value)}
                    checked={checkedInput}
                />

                <label htmlFor={idInput}>{label}</label>
            </div>

        );
    });

    return (
        <div className="search-div">
            <div className="div-input">
                <input type='text' required onInput={(event) => funcSearch(event.target.value)} />
                <span>Search your task</span>
            </div>
            <div className="search-button-div">
                {inpRadiCreat}
            </div>

        </div>
    );
}
export default Search;