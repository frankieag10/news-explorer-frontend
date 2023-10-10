import React, { useSate } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import "./App.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      {!isLoggedIn ? <Header /> : <SavedNewsHeader />}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
