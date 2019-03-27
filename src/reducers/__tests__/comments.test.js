import { SAVE_COMMENT } from "actions/types";
import commentsReducer from "reducers";

it("reducer return comments correctly", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };
  const newState = commentsReducer([], action);
  expect(newState.comments).toEqual(["new comment"]);
});
