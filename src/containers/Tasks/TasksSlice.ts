import {ApiTask} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {createTask, fetchTasks} from "./TasksThunk";

interface TaskState {
    tasks: ApiTask[],
    taskInfo: ApiTask,
    fetchLoading: boolean;
    createLoading: boolean;
    updatingLoading: boolean;
}
const initialState: TaskState = {
    tasks: [],
    taskInfo: {
        id: '',
        title: '',
        status: false
    },
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
            state.tasks = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(createTask.pending, (state) => {
            state.fetchLoading = true
        });
        builder.addCase(createTask.fulfilled, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(createTask.rejected, (state) => {
            state.fetchLoading = false;
        });
    }
});
export const tasksReducer = tasksSlice.reducer;