import React from 'react';
import {Spinner} from "react-bootstrap";

const BtnSpinner = () => {
    return (
        <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
        />
    );
};

export default BtnSpinner;