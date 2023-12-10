import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Login from './Page/Login'
import SignupPage from "./Page/SignupPage";
import Sellproduct from './Page/Sellproducts';
import Notfound from "./Page/Notfound";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/sellproduct' element={<Sellproduct />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
};

export default App;