import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* import Main from '../Main/Main';
import AuthForm from '../AuthForm/AuthForm'; */
import StatusButton from '../StatusButton/StatusButton';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
{/*         <Route path="/" element={<Main />} />
        <Route path="/login" element={<AuthForm />} /> */}
        <Route path="/" element={<StatusButton />}/>
      </Routes>
    </Router>
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



