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

it("handle action with unknow action.", () => {
  const newState = commentsReducer([], {
    type: "random",
    payload: "another comment"
  });
  expect(newState.comments).toEqual([]);
});
