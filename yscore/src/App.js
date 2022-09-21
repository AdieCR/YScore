import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GraphPage from './pages/GraphPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/graph" element={<GraphPage />} />
      <Route path="/form" element={<Form />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
