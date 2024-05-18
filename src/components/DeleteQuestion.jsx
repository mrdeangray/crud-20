import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { QuestionContext } from "../context/QuestionProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

const Msg = styled.p`
font-size: 30px
color: red;
`;

const DeleteQuestion = () => {
  const { id } = useParams();

  const { questions, setQuestions } = useContext(QuestionContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();
  const [currQuestion, setCurrQuestion] = useState([]);

  useEffect(() => {
    const curr = questions.find((ques) => ques.id === id);
  
    setCurrQuestion(curr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();

    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions);
    localStorage.setItem("crud-20-questions", JSON.stringify(newQuestions));
    setIsUpdating(true);

    setTimeout(() => {
      navigate(`/readquestions`);
      setIsUpdating(false);
    }, 2000);
  };
  return (
    <div>
      <Link to={`/readquestions`}>Back</Link>
      <h3>Update: {currQuestion?.name}</h3>
      <button onClick={handleDelete}>Delete: {currQuestion.name}</button>
      <div>
        {questions.map((question) => {
          return <span key={question.id}>{question.name}, </span>;
        })}
      </div>

      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default DeleteQuestion;
