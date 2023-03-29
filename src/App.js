import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "./components/formSchema";
import Main from "./components/Main"
import Pizza from "./components/Pizza"


const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>Bob Loblaw Approved.</p>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>
    </div>
  );
};
export default App;
