import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

function CustomAlert({ text, type }) {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const alertClasses = classNames('alert', `alert-${type}`);

    return (
        <div>
            <Alert variant={type} className={alertClasses}
                   onClick={handleShowModal}>{text}
            </Alert>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Модальное окно</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

CustomAlert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
    ]).isRequired
};

export default CustomAlert;