export interface Task{
    title: string,
    status: boolean
}
export interface ApiTask extends Task{
    id: string
}
export interface ApiTasksList {
    [id: string]: ApiTask
}
