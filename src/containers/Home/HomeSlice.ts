import {ApiTask} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchTasks} from "./HomeThunk";

interface TaskState {
    items: ApiTask[],
    fetchLoading: boolean;
    createLoading: boolean;
    updatingLoading: boolean;
}
const initialState: TaskState = {
    items: [],
    fetchLoading: false,
    createLoading: false,
    updatingLoading: false,
}
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.fetchLoading = true
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.items = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state) => {
            state.fetchLoading = false;
        });
    }
});