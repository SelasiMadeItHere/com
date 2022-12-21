import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import AdminCardrenewal from "./Pages/AdminCardrenewal"
import Userindex from "./Pages/Userindex"
import AdminDeferment from "./Pages/AdminDeferment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admincardrenewal" element={<AdminCardrenewal />} />
        <Route path="/userindex" element={<Userindex />} />
        <Route path="/admindeferment" element={<AdminDeferment />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
