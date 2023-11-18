import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton";

describe("should render button", () => {
  it("should render the button with add", () => {
    render(<PrimaryButton />);

    const element = screen.getByText("Click to Add");

    expect(element).toBeInTheDocument();
  });

  it("should render the button with delete", () => {
    const action = "delete";
    render(<PrimaryButton action={action} />);

    const element = screen.getByText("Click to " + action);

    expect(element).toBeInTheDocument();
  });
});
