import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

const initValue = {
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special: "",
}

const initOrder = [];
const initDisabled = true;

const Pizza = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const handleChange = (event) => {
        const { name, value, checked, type, size, topping1, topping2, topping3, topping4, special} = event.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit();
    };

    return (
        <form onSubmit={handleSubmit} id="pizza-form">
            {/* <div className='errors'>
                <div>{errors.name-input}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div> */}
            <label>First Name
                <input placeholder="Name" value={props.inputValues.name} type="text" id="name-input" onChange={handleChange} />
            </label>
            <label for="size">Choose first topping:
                <select name="size" id="size-dropdown">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="whoa">Whoa</option>
                </select>
            </label>
            <label>Pepperoni
                <input
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={handleChange}
                />
            </label>
            <label>Sausage
                <input
                    type="checkbox"
                    name="sausage"
                    checked={values.sausage}
                    onChange={handleChange}
                />
            </label>
            <label>Mayo
                <input
                    type="checkbox"
                    name="mayo"
                    checked={values.mayo}
                    onChange={handleChange}
                />
            </label>
            <label>Sand
                <input
                    type="checkbox"
                    name="sand"
                    checked={values.sand}
                    onChange={handleChange}
                />
            </label>
            <label>Special Instructions
                <input
                    value={values.specialInst}
                    onChange={handleChange}
                    name='specialInst'
                    type='text'
                />
            </label>


            <input type="submit" disabled={disabled} value="Submit" id="submitBtn" name="submitBtn" />
        </form>
    )
}

export default Pizza;