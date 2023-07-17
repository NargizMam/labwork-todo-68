import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiTask, ApiTasksList, newTask, Task} from "../../types";
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
export const createTask = createAsyncThunk<void, string>(
    'tasks/create',
    async (task) => {
        const newTask: newTask =  {
            status: false,
            title: task
        }
        await axiosApi.post('/tasks.json', newTask);
    }
);
export const completedTask= createAsyncThunk<void, {id: string, status: boolean}, {state: RootState}>(
    'task/completed',
    async ({id, status}, thunkAPI ) => {

        let newCompletedTasks = thunkAPI.getState().tasks.tasks;
        const index = newCompletedTasks.findIndex((task => task.id === id));

        let newTask = {
            ...newCompletedTasks[index],
            status: !status
        };
        await axiosApi.put('tasks/' + id + '.json', newTask);
    }
);
export const deleteTask = createAsyncThunk<void, string>(
    'tasks/delete',
    async (id) => {
        await axiosApi.delete('/tasks/' + id + '.json');
    }
);