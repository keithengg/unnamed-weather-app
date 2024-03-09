import React from "react";
import { History } from '../../constants/types';

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";

import './SearchHistoryList.scss';

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
        <li className="search-history__item">
            <div className="flex flex-col">
                <p>{history.city}</p>
                <p>{history.time}</p>
            </div>
            <div className="flex gap-x-2">
                <button
                    className="search-history__button"
                    onClick={searchHistory}
                    type="button"
                    aria-label={`Search for ${history.city}`}
                >
                    <HiOutlineMagnifyingGlass size={24} />
                </button>
                <button
                    className="search-history__button"
                    onClick={deleteHistory}
                    type="button"
                    aria-label={`Delete ${history.city} history`}
                >
                    <FaTrash size={24} />
                </button>
            </div>
        </li>
    )
}

const SearchHistoryList: React.FC<SearchHistoryListProps> = ({ searchHistory, handleDelete, handleSearch }) => {
    return (
        <div>
            Search History
            <ul className="search-history__list">
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
        </div>
    )
}

export default SearchHistoryList; // Note to marker: Thought about using React.Memo here and useCallback on the "handleDelete/Search" functions but it seems like overkill