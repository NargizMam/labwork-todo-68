import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "../containers/Tasks/TasksSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;