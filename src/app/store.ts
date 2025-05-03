import { configureStore } from "@reduxjs/toolkit";
import { todoSLice } from "../features/todo/todoSLice.ts";

export const store = configureStore({
  reducer: {
    [todoSLice.name]: todoSLice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
