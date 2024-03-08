import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

import SearchHistoryList from "./SearchHistoryList";
import { History } from '../../constants/types'

describe("<SearchHistoryList />", () => {
    const mockHandleDelete = jest.fn();
    const mockHandleSearch = jest.fn();

    const mockData: History[] = [
        {
            city: "Singapore",
            time: "9:00AM"
        },
        {
            city: "Malaysia",
            time: "10:00AM"
        },
        {
            city: "Thailand",
            time: "11:00AM"
        },
        {
            city: "Vietnam",
            time: "12:00PM"
        }
    ]

    it('should render correctly and match snapshot', () => {
        const { container } = render(
            <SearchHistoryList
                searchHistory={mockData}
                handleSearch={mockHandleSearch}
                handleDelete={mockHandleDelete}
            />
        )
        expect(container).toMatchSnapshot()
    });

    it('should render and have all relevant search history data', () => {
        render(
            <SearchHistoryList
                searchHistory={mockData}
                handleSearch={mockHandleSearch}
                handleDelete={mockHandleDelete}
            />
        )

        for (let i = 0; i < mockData.length; i++) {
            expect(screen.getByText(mockData[i].city)).toBeInTheDocument();
            expect(screen.getByText(mockData[i].time)).toBeInTheDocument();

        }
    });

    it('should call appriopriate search function with correct arguments', () => {
        render(
            <SearchHistoryList
                searchHistory={mockData}
                handleSearch={mockHandleSearch}
                handleDelete={mockHandleDelete}
            />
        )

        const searchButton = screen.getByRole('button', { name: `Search for ${mockData[0].city}` });
        expect(searchButton).toBeInTheDocument();

        fireEvent.click(searchButton);
        expect(mockHandleSearch).toHaveBeenCalledWith(mockData[0].city)
        expect(mockHandleSearch).toHaveBeenCalledTimes(1)
    });


    it('should call appriopriate delete function with correct arguments', () => {
        render(
            <SearchHistoryList
                searchHistory={mockData}
                handleSearch={mockHandleSearch}
                handleDelete={mockHandleDelete}
            />
        )

        const deleteButton = screen.getByRole('button', { name: `Delete ${mockData[3].city} history` });
        expect(deleteButton).toBeInTheDocument();

        fireEvent.click(deleteButton);
        expect(mockHandleDelete).toHaveBeenCalledWith(3)
        expect(mockHandleDelete).toHaveBeenCalledTimes(1)
    });
});