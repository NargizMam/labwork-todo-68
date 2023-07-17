import {ApiTask} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {completedTask, createTask, deleteTask, fetchTasks} from "./TasksThunk";

interface TaskState {
    tasks: ApiTask[],
    taskInfo: ApiTask,
    fetchLoading: boolean;
    createLoading: boolean;
    updatingLoading: boolean;
    deleteLoading: boolean;
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
    deleteLoading: false
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
        builder.addCase(completedTask.pending, (state) => {
            state.updatingLoading = true
        });
        builder.addCase(completedTask.fulfilled, (state) => {
            state.updatingLoading = false;
        });
        builder.addCase(completedTask.rejected, (state) => {
            state.updatingLoading = false;
        });
        builder.addCase(deleteTask.pending, (state) => {
            state.deleteLoading = true
        });
        builder.addCase(deleteTask.fulfilled, (state) => {
            state.deleteLoading = false;
        });
        builder.addCase(deleteTask.rejected, (state) => {
            state.deleteLoading = false;
        });
    }
});
export const tasksReducer = tasksSlice.reducer;