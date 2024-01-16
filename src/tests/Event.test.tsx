import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Event from "../components/event/Event";

describe("Event", () => {
  it("It renders correct data", () => {
    render(
      <Event
        category={""}
        description={""}
        eventDay={""}
        eventTime={""}
        image={""}
        isFree={false}
        location={""}
        organizer={""}
        price={""}
        title={""}
        venue={""}
        _id={""}
      />
    );
    expect(screen.getAllByTestId("event-id").length).toBe(11);
  });
});
