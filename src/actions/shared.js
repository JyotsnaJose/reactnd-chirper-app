import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

export const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  //uses thunk middleware.. async API call
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
