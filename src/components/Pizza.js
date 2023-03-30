import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

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

export default function Pizza(props) {
    const {
        // name,
        values,
        change,
        submit,
        disabled,
        errors,
        reset
    } = props

    const handleChange = (event) => {
        const { name, value, checked, type, size, topping1, topping2, topping3, topping4, special } = event.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    const history = useNavigate();
    const addToHistory = () => {
        history.push('/place-order')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit();
    };

    return (
        <div className="container">
            <Link to="/">
                <button>Button here</button>
            </Link>
            <form className="pizzaForm" onSubmit={handleSubmit} id="pizza-form">
                <div className="pizzaGroup">
                    <div className='errors'>
                        <div>{props.errors.name}</div>
                        <div>{props.errors.size}</div>
                        <div>{props.errors.topping1}</div>
                        <div>{props.errors.topping2}</div>
                        <div>{props.errors.topping3}</div>
                        <div>{props.errors.topping4}</div>
                        <div>{props.errors.specialInst}</div>
                    </div>
                    <div className="pizzaList">
                        <label>Name
                            <input placeholder="Name" value={props.values.name} type="text" id="name-input" name="name" onChange={handleChange} />
                        </label>
                        <label name="size">Choose Size:
                            <select name="size" id="size-dropdown" onChange={handleChange} value={props.values.size}>
                                <option value="none">-- Select Size --</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="whoa">Whoa</option>
                            </select>
                        </label>
                        <label>Pepperoni
                            <input
                                type="checkbox"
                                name="topping1"
                                checked={props.values.topping1}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Sausage
                            <input
                                type="checkbox"
                                name="topping2"
                                checked={props.values.topping2}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Mayo
                            <input
                                type="checkbox"
                                name="topping3"
                                checked={props.values.topping3}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Sand
                            <input
                                type="checkbox"
                                name="topping4"
                                checked={props.values.topping4}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Special Instructions
                            <input
                                value={props.values.specialInst}
                                onChange={handleChange}
                                name='specialInst'
                                id='special-text'
                                type='text'
                            />
                        </label>
                    </div>


                    <input type="submit" disabled={props.disabled} value="Submit" id="order-button" name="submitBtn" />
                </div>
            </form>
        </div>
    )
}