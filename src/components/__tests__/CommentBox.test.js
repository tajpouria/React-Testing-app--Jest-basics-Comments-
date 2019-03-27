import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it(" we have a text area that user can type sth in", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  wrapped.update();

  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("the text area will be empty after Submit", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
