import React, { useContext, useState } from "react";
import styled from "styled-components";
import { QuestionContext } from "../context/QuestionProvider";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Input = styled.input`
  border: 2px solid blue;
  font-size: 20px;
  border-radius: 10px;
`;

const Msg = styled.p`
font-size: 30px
color: red;
`;

const CreateQuestion = () => {
  const [inputValue, setInputValue] = useState("");
  const { questions, setQuestions } = useContext(QuestionContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const question = {};
    question.id = uuid();
    question.score = 0;
    question.name = inputValue;

    const newQuestions = [...questions, question];
    setQuestions(newQuestions);
    localStorage.setItem("crud-20-questions", JSON.stringify(newQuestions));
    setIsUpdating(true);
    setInputValue("");
    setTimeout(() => {
      navigate(`/readquestions`);
      setIsUpdating(false);
    }, 2000);
  };
  return (
    <div>
      <Link to={`/readquestions`}>Back</Link>
      <h3>CreateQuestion</h3>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={inputValue} autoFocus />
      </form>
      {questions.map((question) => {
        return <span key={question.id}>{question.name}, </span>;
      })}

      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default CreateQuestion;
