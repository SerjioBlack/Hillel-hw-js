import React, { useState } from "react";
import PropTypes from "prop-types";
import { Carousel, Button } from "react-bootstrap";

function Slider({ images }) {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <Carousel
                activeIndex={index}
                onSelect={(selectedIndex) => setIndex(selectedIndex)}
            >
                {images.map((image, idx) => (
                    <Carousel.Item key={idx} className={idx === index ? "active" : ""}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img width={500} height={300} alt="" className="d-block" src={image} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Button className="carousel-control-prev" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </Button>
            <Button className="carousel-control-next" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </Button>
        </div>
    );
}

Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
