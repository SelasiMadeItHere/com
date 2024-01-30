import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Admin/Dashboard"
import AdminCardrenewal from "./Pages/Admin/AdminCardrenewal"
import AdminDeferment from "./Pages/Admin/AdminDeferment";
import Finance from "./Pages/Admin/Finance";
import Registrar from "./Pages/Admin/Registrar";
import CertRegistrar from "./Pages/Admin/CertRegistrar";
import AdminTranscript from "./Pages/Admin/AdminTranscript";
import IntroductoryLetter from "./Pages/Admin/IntroductoryLetter";
import AdminCertificate from './Pages/Admin/AdminCertificate'
import TransRegistrar from './Pages/Admin/TransRegistrar'
import IntroRegistrar from './Pages/Admin/IntroRegistrar'
import Announcements from "./Pages/Admin/Announcements";
import RegistrarDefer from "./Pages/Admin/RegistrarDefer"
import RejectedCards from "./Pages/Admin/RejectedCards";
import IDUnitApproved from "./Pages/Admin/IDUnitApproved"



import Userindex from "./Pages/User/Userindex"
import UserCardrenewal from "./Pages/User/UserCardrenewal";
import Newrequest from "./Pages/User/Newrequest";
import IDchoice from "./Pages/User/IDchoice";
import UserDeferment from "./Pages/User/UserDeferment";
import UserCertificate from "./Pages/User/UserCertificate";
import UserTranscript from "./Pages/User/UserTranscrpt";
import IDModalCard from "./components/IDModalCard";
import DefermentModal from "./components/DefermentModal";
import Tracker from "./Pages/User/Tracker";
import BasicModal from "./components/DefermentModal";
import Idunit from "./Pages/Admin/IDUnit";
import RegNav from "./components/RegNav";

//System Admin pages
import Login from "./Pages/Admin//Login";
import Register from "./Pages/Admin/Register"
// import Login2 from "./Pages/Admin/Login2";
// import Reports from "./Pages/Admin/Reports"




function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* Components*/}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newrequest" element={<Newrequest />} />
        <Route path="/idchoice" element={<IDchoice />} />
        <Route path="/modaltrial" element={<IDModalCard />} />
        <Route path='/defermodal' element={<DefermentModal />} />
        <Route path='/regnavigation' element={<RegNav/>} />
        <Route path="/cardnav" element={<cardNav/>} />

        {/* STAFF PAGES */}
        <Route path="/admincardrenewal" element={<AdminCardrenewal />} />
        <Route path="/admintranscript" element={<AdminTranscript />} />
        <Route path="/admindeferment" element={<AdminDeferment />} />
        <Route path="/admincertificate" element={<AdminCertificate/>}/>
        <Route path="/studentcard" element={<UserCardrenewal />}/>
        <Route path="/finance" element={<Finance />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/certapproval" element={<CertRegistrar />} />
        <Route path="/introductory-letter" element={<IntroductoryLetter />} />
        <Route path='/transcriptapproval' element={<TransRegistrar/>}/>
        <Route path="/introductoryapproval" element={<IntroRegistrar/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
        <Route path="/registrardeferment" element={<RegistrarDefer/>}/>
        {/* <Route path="/processedrequests" element={<DoneBasket/>}/> */}
        <Route path="/idunit" element={<Idunit/>}/>
        <Route path="/rejectedcards" element={<RejectedCards/>}/>
        <Route path="/approvedcards" element ={<IDUnitApproved/>}/>

        {/* USER PAGES */}
        <Route path="/defermentapplication" element={<UserDeferment />} />
        <Route path='/modalcomplaint' element={<BasicModal />} />
        <Route path="/usercertificate" element={<UserCertificate />} />
        <Route path="/usertranscript" element={<UserTranscript />} />
        <Route path="/userindex" element={<Userindex />} />
        <Route path="/tracker" element={<Tracker />}/>

        {/* ADMIN PAGES */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login2" element={<Login2/>}/>  */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/reports" element={<Reports/>}/> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;