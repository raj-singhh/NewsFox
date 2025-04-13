import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

function App() {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("en"); // New state for language
  const [country, setCountry] = useState("in"); // State for country


  return (
    <div>
      <Router>
        <NavBar setLanguage={setLanguage} setCountry={setCountry}/> {/* ✅ pass setter to NavBar */}
        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="top"
                pageSize={pageSize}
                country={country}
                category="top"
                language={language} // ✅ pass language to News
                
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About
                // ✅ pass language to News
                
              />
            }
          />
          <Route
            exact
            path="/top"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="top"
                pageSize={pageSize}
                country={country}
                category="top"
                language={language}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
                language={language}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
                language={language}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
                language={language}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
                language={language}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
                language={language}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
                language={language}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
