import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Login from './Page/Login'
import SignupPage from "./Page/SignupPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
};

export default App;