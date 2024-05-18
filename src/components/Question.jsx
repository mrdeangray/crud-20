import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Question = ({ question }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${question.name}`
      );
      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <div className="box">
      <span>{question.name}</span>
      <span>{score}</span>
      <Link to={`/update/${question.id}`}>Update</Link>
      <Link to={`/delete/${question.id}`}>Delete</Link>
    </div>
  );
};

export default Question;
