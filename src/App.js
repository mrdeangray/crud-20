import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RenderRoutes from "./components/RenderRoutes";
import AuthProvider from "./context/AuthProvider";
import QuestionProvider from "./context/QuestionProvider";

function App() {
  return (
    <div className="App">
      <QuestionProvider>
        <AuthProvider>
        <Header className="header" />
          <div className="center">
            <Navigation className="navigation" />
            <RenderRoutes className="main" />
          </div>
        </AuthProvider>
      </QuestionProvider>
    </div>
  );
}

export default App;
