import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Watched from "./component/Watched";
import Watchlist from "./component/Watchlist";
import Add from "./component/Add";
import ContextProvider from "./component/context/GlobalContext";
const App = () => {
  return (
    <Router>
      <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;

