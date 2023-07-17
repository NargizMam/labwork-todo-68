import React, {useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {createTask, fetchTasks} from "../../containers/Tasks/TasksThunk";
import {ApiTask} from "../../types";

const TaskForm = () => {
    const dispatch = useAppDispatch();
    const [task, setTask] = useState<string>('');

    const taskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setTask(value);
    };
    const getSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(createTask(task));
        setTask('');
        dispatch(fetchTasks);
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
                    disabled={task === ''}
            >
                Create
            </Button>
        </InputGroup>
    );
};

export default TaskForm;