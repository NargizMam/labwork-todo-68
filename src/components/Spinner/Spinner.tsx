import React from 'react';
import {Spinner} from "react-bootstrap";

const Loading = () => {
    return (
        <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
        </>
    );
};

export default Loading;