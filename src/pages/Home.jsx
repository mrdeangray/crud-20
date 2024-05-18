import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import AnchorPractice from "./AnchorPractice";
import SVGPractice from "./SVGPractice";
const Home = () => {
  const { currUser, handleSignIn, handleSignOut } = useContext(AuthContext);
  return (
    <div>
      <h3>Home</h3>
      {currUser ? (
        <>
          <h3>Hi, {currUser.displayName}</h3>
          <button onClick={handleSignOut}>Sign Out</button>
          <Link to={`/readquestions`}>
            <button>Read Questions</button>
          </Link>
          <AnchorPractice />
          <SVGPractice />
        </>
      ) : (
        <>
          <button onClick={handleSignIn}>Sign In</button>
        </>
      )}
    </div>
  );
};

export default Home;
