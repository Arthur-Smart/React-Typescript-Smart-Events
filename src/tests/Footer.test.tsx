import { describe, it } from "vitest";
// import Home from "../pages/home/Home";
import { render, screen } from "@testing-library/react";
// import SignIn from "../pages/signin/SignIn";
import Footer from "../components/footer/Footer";

describe("Signin", () => {
  it("The first sentence of the title", () => {
    render(<Footer />);
    screen.debug();
  });
});
