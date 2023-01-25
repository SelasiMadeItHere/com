import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import AdminCardrenewal from "./Pages/AdminCardrenewal"
import Userindex from "./Pages/Userindex"
import AdminDeferment from "./Pages/AdminDeferment";
import UserCardrenewal from "./Pages/UserCardrenewal";
import Newrequest from "./Pages/Newrequest";
import IDchoice from "./Pages/IDchoice";
import ModalCard from "./components/ModalCard";
import Finance from "./Pages/Finance";
import UserDeferment from "./Pages/UserDeferment";
// import ModalComplaint from "./components/ModalComplaint";
import BasicModal from "./components/ModalComplaint";
import UserCertificate from "./Pages/UserCertificate";


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
        <Route path="/modaltrial" element={<ModalCard/>}/>
        <Route path="/finance" element={<Finance/>}/>
        <Route path="/defermentapplication" element={<UserDeferment/>}/>
        <Route path='/modalcomplaint' element={<BasicModal/>}/>
        <Route path="/usercertificate" element={<UserCertificate/>}/>
        
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
