import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./../Mocks/MockMenuItems.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MenuCard from "../MenuCard";
import { act } from "react";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Menu card component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <MenuCard />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("menuItem").length).toBe(20);

  const addButton = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addButton[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addButton[1]);

  expect(screen.getByText("Cart (2 items)"));

  expect(screen.getAllByTestId("menuItem").length).toBe(22);

  const clearButton = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearButton);

  expect(screen.getAllByTestId("menuItem").length).toBe(20);
});
