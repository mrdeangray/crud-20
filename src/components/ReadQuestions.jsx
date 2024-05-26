import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from "../context/QuestionProvider";
import Question from "./Question";

const ReadQuestions = () => {
  const { questions, setQuestions } = useContext(QuestionContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(undefined);

  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("crud-20-questions")) || [];
    setQuestions(savedQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortOptions = {
    ascending: (a, b) => a.name.localeCompare(b.name),
    descending: (a, b) => b.name.localeCompare(a.name),
    score: (a, b) => a.name - b.name,
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Home</Link>
      <h1>ReadQuestions</h1>
      <form onChange={handleSortChange}>
        <input type="radio" name="sort" value="ascending" />
        <input type="radio" name="sort" value="descending" />
      </form>
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      {questions
        .filter((elem) => elem.name.includes(searchTerm))
        .sort(sortOptions[sortBy])
        .map((question) => {
          return <Question key={question.id} question={question} />;
        })}
      <Link to={`/createquestion`}>
        <button>Create Question</button>
      </Link>
    </div>
  );
};

export default ReadQuestions;
