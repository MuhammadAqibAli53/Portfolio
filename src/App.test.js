import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio identity and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /building intelligent software experiences/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute("href", "/project");
});
