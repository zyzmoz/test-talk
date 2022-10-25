import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Test App Component", () => {
  it("when render", () => {
    render(<App />);
    const bodyText = screen.getByTestId("body-text");
    const button = screen.getByTestId("button");

    expect(bodyText).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("when button clicked", () => {
    render(<App />);
    const button = screen.getByTestId("button");

    fireEvent.click(button);

    const bodyText = screen.getByTestId("body-text");

    expect(bodyText.textContent).toBe("Clicked");
  });
});
