import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      setAlertMessage("Dark mode on");
      setMessage("success");
      document.title="Akash' App - In Dark Mode"
    } else {
      setMode("light");
      document.body.style.background = "white";
      setAlertMessage("Dark mode off");
      setMessage("warning");
      document.title="Akash' App - In Light Mode"
    }
  };

  setTimeout(() => {
    setAlertMessage(null);
  }, 1500);

  return (
    <>
      <Navbar
        title="Title"
        home="newHome"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alertMessage} message={message} />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<TextForm mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
