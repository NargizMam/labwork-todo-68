import React, {useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {createTask} from "../../containers/Tasks/TasksThunk";
import {ApiTask} from "../../types";

const TaskForm = () => {
    const dispatch = useAppDispatch();
    // const taskInfo = useAppSelector<ApiTask | null>((state) => state.tasks.taskInfo);
    const [task, setTask] = useState<string>('');

    // if(taskInfo){
    //     setTask(taskInfo.title);
    // }

    const taskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setTask(value);
    };
    const getSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createTask(task));
    }

    return (
        <InputGroup className="m-3" >
            <Form.Control
                placeholder="Add new task"
                value={task}
                onChange={taskChange}
            />
            <Button variant="outline-secondary"
                    id="button-addon2"
                    type='submit'
                    onClick={getSubmit}
            >
                Create
            </Button>
        </InputGroup>
    );
};

export default TaskForm;