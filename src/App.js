import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "./components/formSchema";
import Main from "./components/Main"
import Pizza from "./components/Pizza"

const initFormErrors = {
  name: '',
  size: '',
  topping1: '',
  topping2: '',
  topping3: '',
  topping4: '',
  specialInst: ''
}

const initFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  specialInst: ''
}

const App = () => {
  const [orders, setOrders] = useState();
  const [inputValues, setInputValues] = useState(initFormValues);
  const [errors, setErrors] = useState(initFormErrors);
  const [disabled, setDisabled] = useState();

  const formReset = () => {
    setInputValues(initFormValues);
  };

  const orderReset = () => {
    setOrders([]);
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        console.log(`RES DATA: ${JSON.stringify(res.data)}`)
        setOrders([res.data, ...orders])
      })
      .catch(() => setInputValues(initFormValues))
      .finally(() => setInputValues(initFormValues))
  }

  const orderSubmit = () => {
    console.log(`Order Submit here`);
    const newOrder = {
      name: inputValues.name,
      size: inputValues.size,
      specialInst: inputValues.specialInst,
      // toppings: ["Pepperoni", "Sausage", "Mayo", "Sand"].filter(topping => !!inputValues[topping])
      topping1: inputValues.topping1,
      topping2: inputValues.topping2,
      topping3: inputValues.topping3,
      topping4: inputValues.topping4
    }
    console.log(`New Order Here:  ${JSON.stringify(newOrder)}`);
    setInputValues(initFormValues);
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(inputValues).then(valid => setDisabled(!valid))
  }, [inputValues])

  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>Bob Loblaw Approved.</p>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/pizza" element={<Pizza
          values={inputValues}
          change={inputChange}
          submit={orderSubmit}
          disabled={disabled}
          errors={errors}
          reset={formReset}
        />} />
      </Routes>
    </div>
  );
};

export default App;
