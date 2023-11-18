import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render hello world", () => {
  render(<App />);

  const element = screen.getByText("Hello world");

  expect(element).toBeInTheDocument;
});
