import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import Sidebar from "../Main/Sidebar/Sidebar";
import Header from "../Header/Header";
import DataAmbassador from "../Main/DataAmbassador/DataAmbassador";
import Content from "../Main/Content/Content";

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
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;

// import "./App.css";
// import Main from "../Main/Main";
// import AuthForm from "../AuthForm/AuthForm";

// function App() {
//   return (
//     <>
//       <Main />
//       <AuthForm />
//     </>
//   );
// }

// export default App;
