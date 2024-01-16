import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/footer/Footer";

describe("Signin", () => {
  it("The first sentence of the title", () => {
    render(<Footer />);
    screen.debug();
  });
});
