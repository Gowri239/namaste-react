import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./../Mocks/MockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Integration test cases of body", () => {
  beforeAll(() => {
    console.log("Runs before all test cases");
  });

  beforeEach(() => {
    console.log("Runs before each test cases");
  });

  afterAll(() => {
    console.log("Runs after all test cases");
  });

  afterEach(() => {
    console.log("Runs after each test case");
  });

  it("Should search restaurant cards with coffee test input", async () => {
    await act(async () =>
      // need to wrap in act for async things like fetch
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchButton = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "coffee" } });

    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(5);
  });

  it("Should filter top rated restaurant cards", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const filterButton = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(filterButton);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(15);
  });
});
