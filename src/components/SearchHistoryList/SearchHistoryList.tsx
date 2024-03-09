import React from "react";
import { History } from '../../constants/types'

interface SearchHistoryListProps {
    searchHistory: History[];
    handleDelete: (index: number) => void;
    handleSearch: (searchLocation: string) => void;
};

interface SearchHistoryProps {
    history: History;
    searchHistory: () => void;
    deleteHistory: () => void;
};

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, searchHistory, deleteHistory }) => {
    return (
        <li className="flex">
            <div className="flex">
                <p>{history.city}</p>
                <p>{history.time}</p>
            </div>
            <button onClick={searchHistory} type="button" aria-label={`Search for ${history.city}`}>Search</button>
            <button onClick={deleteHistory} type="button" aria-label={`Delete ${history.city} history`}>Delete</button>
        </li>
    )
}

const SearchHistoryList: React.FC<SearchHistoryListProps> = ({ searchHistory, handleDelete, handleSearch }) => {
    return (
        <ul>
            {searchHistory && searchHistory.map((history, index) => {
                return (
                    <SearchHistory
                        key={`${history.city}${history.time}`}
                        history={history}
                        searchHistory={() => handleSearch(history.city)}
                        deleteHistory={() => handleDelete(index)}
                    />
                )
            })}
        </ul>
    )
}

export default SearchHistoryList; // Note to marker: Thought about using React.Memo here and useCallback on the "handleDelete/Search" functions but it seems like overkill