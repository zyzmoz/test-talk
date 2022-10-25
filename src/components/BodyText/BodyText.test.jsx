import { render, screen } from "@testing-library/react"
import BodyText from "./BodyText"

describe("Test BodyText Component", () => {
  it("When no text", () => {
    render(<BodyText />)

    const textComponent = screen.getByTestId('body-text');
    expect(textComponent.textContent).toBe("")
  })

  it("When text", () => {
    render(<BodyText text="Hello"/>)

    const textComponent = screen.getByTestId('body-text');
    expect(textComponent.textContent).toBe("Hello")
  })
})