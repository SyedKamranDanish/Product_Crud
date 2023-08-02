import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudOperations from "../modules/CrudOperations";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/abc" element={<CrudOperations />} />
      </Routes>
    </Router>
  )
}

export default index
