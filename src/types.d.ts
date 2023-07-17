export interface Task{
    title: string,
}
export interface newTask {
    title: string,
    status: boolean;
}
export interface ApiTask extends newTask{
    id: string,
}
export interface ApiTasksList {
    [id: string]: ApiTask
}
