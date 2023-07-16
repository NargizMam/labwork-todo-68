import React, {useEffect} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import TaskInfo from "../../components/Task/TaskInfo";
import TaskForm from "../../components/TaskForm/TaskForm";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchTasks} from "./TasksThunk";
import {map} from "react-bootstrap/ElementChildren";

const Tasks = () => {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.tasks.tasks);
    const fetching = useAppSelector(state => state.tasks.fetchLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    return (
        <Container fluid='sm'>
            <Row>
                <Col xs={6}>
                    <TaskForm/>
                    {fetching ? <Spinner/> :
                    tasks.map(task => (
                        <TaskInfo
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            status={task.status}
                        />
                    ))})
                </Col>
            </Row>
        </Container>

    );
};

export default Tasks;