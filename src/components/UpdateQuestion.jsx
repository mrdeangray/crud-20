import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { QuestionContext } from "../context/QuestionProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

const Input = styled.input`
  border: 2px solid blue;
  font-size: 20px;
  border-radius: 10px;
`;

const Msg = styled.p`
font-size: 30px
color: red;
`;

const UpdateQuestion = () => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const { questions, setQuestions } = useContext(QuestionContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();
  const [currQuestion, setCurrQuestion] = useState([]);

  useEffect(() => {
    const curr = questions.find((ques) => ques.id === id);
    setInputValue(curr.name);
    setCurrQuestion(curr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestions = questions.map((question) => {
      if (question.id === id) {
        question.name = inputValue;
      }
      return question;
    });
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
      <h3>Update: {currQuestion?.name}</h3>
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

export default UpdateQuestion;
