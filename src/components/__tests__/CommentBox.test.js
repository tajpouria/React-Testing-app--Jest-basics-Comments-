import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("text area test block", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapped.update();
  });

  it(" we have a text area that user can type sth in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("the text area will be empty after Submit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
