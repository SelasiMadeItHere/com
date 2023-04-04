import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Admin/Dashboard"
import AdminCardrenewal from "./Pages/Admin/AdminCardrenewal"
import Userindex from "./Pages/User/Userindex"
import AdminDeferment from "./Pages/Admin/AdminDeferment";
import UserCardrenewal from "./Pages/User/UserCardrenewal";
import Newrequest from "./Pages/User/Newrequest";
import IDchoice from "./Pages/User/IDchoice";
import ModalCard from "./components/ModalCard";
import Finance from "./Pages/Admin/Finance";
import UserDeferment from "./Pages/User/UserDeferment";
// import ModalComplaint from "./components/ModalComplaint";
import BasicModal from "./components/ModalComplaint";
import UserCertificate from "./Pages/User/UserCertificate";
import Registrar from "./Pages/Admin/Registrar";
import CertRegistrar from "./Pages/Admin/CertRegistrar";
import UserTranscript from "./Pages/User/UserTranscrpt"
import AdminTranscript from "./Pages/Admin/AdminTranscript";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newrequest" element={<Newrequest />} />
        <Route path="/idchoice" element={<IDchoice />} />
        <Route path="/modaltrial" element={<ModalCard />} />

        {/* ADMIN PAGES */}
        <Route path="/admincardrenewal" element={<AdminCardrenewal />} />
        <Route path="/admintranscript" element={<AdminTranscript />} />
        <Route path="/admindeferment" element={<AdminDeferment />} />
        <Route path="/studentcard" element={<UserCardrenewal />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/certapproval" element={<CertRegistrar />} />
        
        {/* USER PAGES */}
        <Route path="/defermentapplication" element={<UserDeferment />} />
        <Route path='/modalcomplaint' element={<BasicModal />} />
        <Route path="/usercertificate" element={<UserCertificate />} />
        <Route path="/usertranscript" element={<UserTranscript />} />
        <Route path="/userindex" element={<Userindex />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
