import { render, screen } from "@testing-library/react";
import RestaurentCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "./../Mocks/RestaurantCard.json";
import "@testing-library/jest-dom";

it("Should render Restaurant card component", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);

  const restaurant = screen.getByText("McDonald's");

  expect(restaurant).toBeInTheDocument();
});

it("Should render withPromotedLabel card component", () => {
  const RestaurentWithLabel = withPromotedLabel(RestaurentCard);

  render(<RestaurentWithLabel resData={MOCK_DATA} />);

  const restaurant = screen.getByText("₹400 for two");

  expect(restaurant).toBeInTheDocument();
});
