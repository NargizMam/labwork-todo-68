import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiTask, ApiTasksList, Task} from "../../types";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/store";

export const fetchTasks = createAsyncThunk(
    'tasks/fetch',
    async () => {
        const tasksResponse = await axiosApi.get<ApiTasksList | null>('tasks.json');
        const tasks = tasksResponse.data;
        let newTasks: ApiTask[] = [];
        if(tasks){
            newTasks = Object.keys(tasks).map(id => {
                const task = tasks[id];
                return {
                    ...task,
                    id
                }
            });
        }
        return newTasks;
    }
);
export const createTask = createAsyncThunk<void, string, {state: RootState}>(
    'tasks/create',
    async (task) => {
        await axiosApi.put('/tasks.json', task);
    }
);