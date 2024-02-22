import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import Sidebar from "../Main/Sidebar/Sidebar";
import Header from "../Header/Header";
import DataAmbassador from "../Main/DataAmbassador/DataAmbassador";
import Content from "../Main/Content/Content";
import Register from "../Register/Register";
import Program from "../Main/Program/Program";
import Budjet from "../Main/Budjet/Budjet";

const AppRouter: React.FC = () => {
  return (
    <main className="main">
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/data-ambassador" Component={DataAmbassador} />
          <Route path="/content" Component={Content} />
          <Route path="/program" Component={Program} />
          <Route path="/program" Component={Budjet} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
