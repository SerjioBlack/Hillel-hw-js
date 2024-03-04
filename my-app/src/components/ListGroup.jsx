import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ListGroup as BootstrapListGroup } from "react-bootstrap";

function ListGroup({ children }) {
    const listItems = React.Children.map(children, (child) => (
        <BootstrapListGroup.Item>
            <p>{child}</p>
        </BootstrapListGroup.Item>
    ));

    return <BootstrapListGroup>{listItems}</BootstrapListGroup>;
}

ListGroup.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListGroup;
