import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useAppDispatch} from "../../app/hook";
import {completedTask, fetchTasks} from "../../containers/Tasks/TasksThunk";

interface Props {
    id: string,
    title: string,
    status: boolean
}
const TaskInfo: React.FC<Props> = ({id, status,title}) => {
    const dispatch = useAppDispatch();

    const onDelete = () => {

    };
    const onCompleted = async () => {
        dispatch(completedTask({id, status}));
        await dispatch(fetchTasks());
    };

    return (
        <>
            <Card body>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <Form>
                        <Form.Check
                            disabled
                            type={"radio"}
                            label={`completed`}
                            id={`completed`}
                            onChange={onCompleted}
                            checked={status}
                        />
                    </Form>
                    <Card.Title>{title}</Card.Title>
                </div>
                <Button variant="outline-danger">
                    Delete
                </Button>{' '}
            </Card>
        </>
    );
};

export default TaskInfo;