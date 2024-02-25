import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Sidebar from "../Main/Sidebar/Sidebar";
import Header from "../Header/Header";
import DataAmbassador from "../Main/DataAmbassador/DataAmbassador";
import Content from "../Main/Content/Content";
import Promokod from "../Main/Promokod/Promokod";
import Register from "../Register/Register";
import Program from "../Main/Program/Program";
import Budjet from "../Main/Budjet/Budjet";
import Sending from "../Main/Sending/Sending";
import Notice from "../Main/Notice/Notice";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

const AppRouter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isSuccessfull: false,
    customMessage: "",
  });

  // Логика InfoTooltip
  const toggleVisibility = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false); // Скрываем окно через 3 секунды
    }, 3000);
  };

  function handleInfoTooltip(effect: boolean, customMessage: string) {
    setIsInfoTooltip((prevState) => ({
      ...prevState,
      isSuccessfull: effect,
      customMessage: customMessage,
    }));
    toggleVisibility();
  }
  console.log("handleInfoTooltip: ", handleInfoTooltip);

  return (
    <main className="main">
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/data-ambassador" Component={DataAmbassador} />
          <Route path="/content" Component={Content} />
          <Route path="/promokod" Component={Promokod} />
          <Route path="/program" Component={Program} />
          <Route path="/budjet" Component={Budjet} />
          <Route path="/sending" Component={Sending} />
          <Route path="/notice" Component={Notice} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <InfoTooltip
        isVisible={isVisible}
        isSuccessfull={isInfoTooltip.isSuccessfull}
        customMessage={isInfoTooltip.customMessage}
      />
    </main>
  );
};

export default AppRouter;
