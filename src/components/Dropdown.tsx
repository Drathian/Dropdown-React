import {Dropdown, DropdownButton} from "react-bootstrap";

import React from "react";

interface DropdownBtnProps {}

const DropdownScroll: React.FC<DropdownBtnProps> = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown Button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    )
}

export default DropdownScroll;