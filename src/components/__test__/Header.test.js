import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

it("should render Header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart (0 items)");

  expect(cart).toBeInTheDocument();
});

it("should render Header component with Home", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const listItems = screen.getAllByRole("listitem");

  listItems.forEach((item) => {
    expect(item).toBeInTheDocument();
  });

  //   expect(listItems.length).toBe(6);
});
