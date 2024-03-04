import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Progress extends React.Component {
    render() {
        const { percentage } = this.props;

        // Определение классов для стилизации прогресс-бара
        const progressBarClasses = classNames("progress-bar", {
            "bg-success": percentage >= 75,
            "bg-warning": percentage >= 50 && percentage < 75,
            "bg-danger": percentage < 50,
        });

        return (
            <div className="progress">
                <div
                    className={progressBarClasses}
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="progressbar" // Исправлено на "progressbar"
                    style={{
                        width: `${percentage}%`,
                        height: "20px",
                        backgroundColor: "blue",
                    }}
                ></div>
            </div>
        );
    }
}

// Проверка типов свойств
Progress.propTypes = {
    percentage: PropTypes.number.isRequired,
};

export default Progress;
