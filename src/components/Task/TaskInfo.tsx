import React from 'react';
import {Card, Form} from "react-bootstrap";

const TaskInfo = () => {
    return (
        <>
          <Card body>
              <Form>
                  <Form.Check
                      disabled
                      type={"radio"}
                      label={`completed`}
                      id={`completed`}
                  />
              </Form>
              <Card.Title></Card.Title>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash3-fill"></i>
          </Card>
        </>
    );
};

export default TaskInfo;