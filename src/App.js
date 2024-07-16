import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/Loginpage';
import Signup from './Components/Signup'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
