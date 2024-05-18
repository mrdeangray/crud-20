import React from "react";
import { Route, Routes } from "react-router-dom";
import ReadQuestions from "./ReadQuestions";
import PrivatesRoutes from "./PrivatesRoutes";
import Home from "../pages/Home";
import CreateQuestion from "./CreateQuestion";
import UpdateQuestion from "./UpdateQuestion";
import DeleteQuestion from "./DeleteQuestion";

const RenderRoutes = ({ className }) => {
  return (
    <div className={className}>
      
      <Routes>
        <Route element={<PrivatesRoutes />}>
          <Route exact path="/readquestions" element={<ReadQuestions />} />
          <Route exact path="/createquestion" element={<CreateQuestion />} />
          <Route exact path="/update/:id" element={<UpdateQuestion />} />
          <Route exact path="/delete/:id" element={<DeleteQuestion />} />
        </Route>
        <Route exact path="/" element={<Home />} />

      </Routes>
    </div>
  );
};

export default RenderRoutes;
