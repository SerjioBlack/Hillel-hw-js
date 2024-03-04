import React, { useState } from "react";
import PropTypes from "prop-types";

function MyForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        address: "",
        city: "",
        country: "Choose",
        acceptRules: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: val,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleBack = () => {
        setSubmitted(false);
    };

    const sortedFormData = Object.entries(formData).sort(([keyA], [keyB]) =>
        keyA.localeCompare(keyB)
    );

    return (
        <div>
            {!submitted ? (
                <form name="myForm" onSubmit={handleSubmit}>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">
                            Address
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            placeholder="1234 Main St"
                            value={formData.address}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            className="form-control"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option>Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="russia">Russia</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input
                                    id="rules"
                                    type="checkbox"
                                    name="acceptRules"
                                    className="form-check-input"
                                    checked={formData.acceptRules}
                                    onChange={handleChange}
                                />
                                Accept Rules
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign in
                    </button>
                </form>
            ) : (
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <table className="table">
                        <tbody>
                        {sortedFormData.map(([key, value], index) => (
                            <tr key={index}>
                                <td>{key}</td>
                                <td>
                                    {typeof value === "boolean" ? value.toString() : value}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MyForm;
