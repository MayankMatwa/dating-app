import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";

function App() {
  const [page, setPage] = useState("LoginPage");

  const [user, setUser] = useState({
    name: "Guest",
    email: "Guest123@gmail.com",
    password: "Welcome",
  });

  return (
    <div className="App">
      {page === "SignInPage" ? (
        <SignInPage setPage={setPage} setUser={setUser} />
      ) : page === "SignUpPage" ? (
        <SignUpPage setPage={setPage} setUser={setUser} />
      ) : page === "HomePage" ? (
        <HomePage setPage={setPage} setUser={setUser} user={user} />
      ) : (
        <LandingPage setPage={setPage} />
      )}
    </div>
  );
}

export default App;
