import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from "../context/QuestionProvider";
import Question from "./Question";

const ReadQuestions = () => {
  const { questions, setQuestions } = useContext(QuestionContext);

  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("crud-20-questions")) || [];
    setQuestions(savedQuestions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Link to={`/`}>Home</Link>
      <h1>ReadQuestions</h1>
      {questions.map(question=>{
        return <Question key={question.id}  question={question} />
      })
}
      <Link to={`/createquestion`}>
        <button>Create Question</button>
      </Link>
    </div>
  );
};

export default ReadQuestions;
