import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("save comments action", () => {
  it("correct action type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("correct action payload", () => {
    const action = saveComment("new comment");
    expect(action.payload).toEqual("new comment");
  });
});
