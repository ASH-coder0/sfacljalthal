import { configureStore } from "@reduxjs/toolkit";

import eventReducer from "./slices/eventSlice";
import noticeReducer from "./slices/noticeSlice";
import pressReleaseReducer from "./slices/pressReleaseSlice";
import teamReducer from "./slices/teamSlice";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    notice: noticeReducer,
    pressRelease: pressReleaseReducer,
    team: teamReducer,
  }
});