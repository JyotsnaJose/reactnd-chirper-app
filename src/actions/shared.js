//thunk action creator that gets the data from the database
//and then dispatches actions to the store to set the three pieces of state we have in our store
import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

export const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
