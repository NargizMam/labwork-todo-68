export interface Task{
    title: string,
}
export interface ApiTask extends Task{
    id: string,
    status: boolean

}
export interface ApiTasksList {
    [id: string]: ApiTask
}
