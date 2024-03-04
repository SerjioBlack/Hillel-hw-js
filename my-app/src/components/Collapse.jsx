import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Collapse({ text, opened = true }) {
    const [isOpened, setIsOpened] = useState(opened);

    const handleToggle = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div>
            <p>
                <a
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#collapseContent"
                    role="button"
                    aria-expanded={isOpened}
                    onClick={handleToggle}
                >
                    Link with href
                </a>
            </p>
            <div
                className={classNames("collapse", { show: isOpened })}
                id="collapseContent"
            >
                <div className="card card-body">{text}</div>
            </div>
        </div>
    );
}

Collapse.propTypes = {
    text: PropTypes.string.isRequired,
    opened: PropTypes.bool,
};

export default Collapse;
