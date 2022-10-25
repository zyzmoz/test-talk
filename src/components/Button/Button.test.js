import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe('Test Button Component', () => {
  const mockButtonCall = jest.fn()

  it('When no text provided', () => {
    render(<Button onClick={mockButtonCall}/>)

    expect(screen.getByTestId('button').textContent).toBe("Button")
  })

  it('When text provided', () => {
    render(<Button text="Click" onClick={mockButtonCall}/>)

    expect(screen.getByTestId('button').textContent).toBe("Click")
  })

  it('When clicked', () => {
    render(<Button text="Click" onClick={mockButtonCall}/>)

    const button = screen.getByTestId('button')

    fireEvent.click(button)

    expect(mockButtonCall).toHaveBeenCalled()
  })
})