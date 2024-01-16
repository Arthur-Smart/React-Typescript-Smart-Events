import { describe, it } from "vitest";
import Home from "../pages/home/Home";
import { render, screen } from "@testing-library/react";
// import SignIn from "../pages/signin/SignIn";

describe("Home", () => {
  it("The first sentence of the title", () => {
    render(<Home />);
    screen.debug();
  });
});
