import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {completedTask, deleteTask, fetchTasks} from "../../containers/Tasks/TasksThunk";
import BtnSpinner from "../Spinner/BtnSpinner";

interface Props {
    id: string,
    title: string,
    status: boolean
}
const TaskInfo: React.FC<Props> = ({id, status,title}) => {
    const dispatch = useAppDispatch();
    const deleting = useAppSelector(state => state.tasks.deleteLoading);
    const onDelete = async () => {
        await dispatch(deleteTask(id));
        dispatch(fetchTasks());
    };
    const onCompleted = async () => {
        await dispatch(completedTask({id, status}));
        dispatch(fetchTasks());
    };

    return (
        <>
            <Card body>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <Form>
                        <Form.Check
                            type={"radio"}
                            label={`completed`}
                            id={`completed`}
                            onClick={onCompleted}
                            checked={status}
                        />
                    </Form>
                    <Card.Title>{title}</Card.Title>
                </div>
                <hr/>
                <Button variant="outline-danger"
                        onClick={onDelete}
                >
                    {deleting && <BtnSpinner/>}
                    Delete
                </Button>{' '}
            </Card>
        </>
    );
};

export default TaskInfo;