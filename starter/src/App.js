import "./App.css";
import ListBooks from "./components/Bookshefts/ListBooks/ListBooks";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBook from "./components/SearchBooks/SearchBookBar/SearchBook";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBook />} />
      </Routes>
    </div>
  );
}

export default App;