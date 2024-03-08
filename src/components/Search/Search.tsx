import React from "react"

interface Props {
    location: string;
    handleUpdate: (location: string) => void;
    handleClick: () => void;
};

const Search: React.FC<Props> = (props) => {
    return (
        <>
            <label htmlFor="location">Enter Country/City</label>
            <input
                type="text"
                name="location"
                value={props.location}
                onChange={(e) => props.handleUpdate(e.target.value)}
            />
            <button onClick={props.handleClick} type="button" aria-label="Search">Search</button>
        </>
    )
}

export default Search;