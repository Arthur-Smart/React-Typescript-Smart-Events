import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SignIn from "../pages/signin/SignIn";

describe("Signin", () => {
  it("Testing the signin page", () => {
    render(<SignIn />);
    expect(screen.getByTestId("title-id")).toHaveTextContent("Sign in");
  });
});
