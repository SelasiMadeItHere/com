import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import AdminCardrenewal from "./Pages/AdminCardrenewal"
import Userindex from "./Pages/Userindex"
import AdminDeferment from "./Pages/AdminDeferment";
import UserCardrenewal from "./Pages/UserCardrenewal";
import Newrequest from "./Pages/Newrequest";
import IDchoice from "./Pages/IDchoice";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admincardrenewal" element={<AdminCardrenewal />} />
        <Route path="/userindex" element={<Userindex />} />
        <Route path="/admindeferment" element={<AdminDeferment />} />
        <Route path="/studentcard" element={<UserCardrenewal />} />
        <Route path="/newrequest" element={<Newrequest />} />
        <Route path="/idchoice" element={<IDchoice/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
