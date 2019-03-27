import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

it("can fetch a list of comments and display it", () => {
  // Attempt to render whole app
  // find the fetchComments button and click it

  wrapped.find(".fetch-comments").simulate("click");

  // expect to find a list of comments
  wrapped.update();
  expect(wrapped.find("li").length).toEqual(500);
});
