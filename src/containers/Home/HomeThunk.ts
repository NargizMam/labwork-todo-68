import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiTask, ApiTasksList} from "../../types";
import axiosApi from "../../axiosApi";

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