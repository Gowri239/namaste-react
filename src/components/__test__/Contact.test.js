import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// group test cases
describe("Contact us page test cases", () => {
  test("Should load heading inside contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input elements inside contact component", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs.length).toBe(2);
  });

  test("Should load name input element inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load submit button inside contact component", () => {
    render(<Contact />);

    const submitButton = screen.getByText("Submit");

    expect(submitButton).toBeInTheDocument();
  });
});
