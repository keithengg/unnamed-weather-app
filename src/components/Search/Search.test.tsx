import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Search from "./Search";

describe("<Search />", () => {
    const handleUpdate = jest.fn();
    const handleClick = jest.fn();

    it('should render correctly and match snapshot', () => {
        const { container } = render(
            <Search
                location=""
                handleClick={handleClick}
                handleUpdate={handleUpdate}
            />
        )
        expect(container).toMatchSnapshot()
    });

    it("should call handleClick when Search button clicked", async () => {
        render(
            <Search
                location="Singapore"
                handleClick={handleClick}
                handleUpdate={handleUpdate}
            />
        )

        const input = await screen.getByRole("textbox");
        expect((input as HTMLInputElement).value).toBe("Singapore")

        const button = screen.getByRole("button", { name: 'Search' });
        expect(button).toBeInTheDocument()

        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});