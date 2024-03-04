import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ButtonGroup, Button } from "react-bootstrap";

function BtnGroup() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <ButtonGroup>
            <Button
                variant="secondary"
                className={classNames("left", { active: activeButton === "left" })}
                onClick={() => handleButtonClick("left")}
            >
                Left
            </Button>
            <Button
                variant="secondary"
                className={classNames("right", { active: activeButton === "right" })}
                onClick={() => handleButtonClick("right")}
            >
                Right
            </Button>
        </ButtonGroup>
    );
}

export default BtnGroup;
