import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders portfolio identity and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /building intelligent software experiences/i })).toBeInTheDocument();

  const navigation = screen.getByRole("navigation");
  expect(within(navigation).getByRole("link", { name: /^projects$/i })).toHaveAttribute("href", "/project");
});
