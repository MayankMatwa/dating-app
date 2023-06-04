import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

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
        <LandingPage setPage={setPage} isMobile={isMobile} />
      )}
    </div>
  );
}

export default App;
