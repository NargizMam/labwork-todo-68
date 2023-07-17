import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TaskForm from "../../components/TaskForm/TaskForm";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchTasks} from "./TasksThunk";
import Loading from "../../components/Spinner/Spinner";
import TaskInfo from "../../components/Task/TaskInfo";

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
                    {fetching ? <Loading/> :
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