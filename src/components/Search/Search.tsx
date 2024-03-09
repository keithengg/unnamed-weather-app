import React, { useState } from "react"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import './Search.scss';

interface Props {
    location: string;
    handleUpdate: (location: string) => void;
    handleClick: () => void;
};

const Search: React.FC<Props> = (props) => {
    const [value, setValue] = useState(''); // Solely for checking if input isn't empty

    return (
        <div className="flex">
            <div className="search__container">
                <label className={`search__label ${value ? 'search__label--filled' : ''}`} htmlFor="location">Enter Country/City</label>
                <input
                    className="search__input"
                    type="text"
                    name="location"
                    value={props.location}
                    onChange={(e) => {
                        props.handleUpdate(e.target.value);
                        setValue(e.target.value)
                    }}
                />
            </div>
            <button
                className="search__button"
                onClick={props.handleClick}
                type="button"
                aria-label="Search"
                alt-text
            >
                <HiOutlineMagnifyingGlass size={32} color="white" aria-label="Search Icon" />
            </button>
        </div>
    )
}

export default Search;