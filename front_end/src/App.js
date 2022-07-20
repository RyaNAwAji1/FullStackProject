import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Comp/Pages/Navbar";
import Home from "./Comp/Pages/Home";
import About from "./Comp/Pages/About";
import StudentLogin from "./Comp/Pages/Students/StudentLogin";
import StudentRegister from "./Comp/Pages/Students/StudentRegister";
import StaffLogin from "./Comp/Pages/Staff/StaffLogin";
import StudentDash from "./Comp/Pages/Students/StudentDash";
import StaffDash from "./Comp/Pages/Staff/StaffDash";
import NotFound from "./Comp/Pages/NotFound";
import Services from "./Comp/Pages/Services";
import AddNote from "./Comp/API/Notes/AddNote";
import Notes from "./Comp/API/Notes/Notes";
import NoteHome from "./Comp/API/Notes/NoteHome";
import Map from "./Comp/API/Map/Map";
import Main from "./Comp/API/Library/Main";
import Restaurant from "./Comp/API/Restaurant/Restaurant";
import Order from "./Comp/API/Restaurant/Order";
import StudentId from "./Comp/Pages/Students/StudentId";
import TuwaiqCourse from "./Comp/Pages/Students/TuwaiqCourse";
import { useState } from "react";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="#s-service" element={<Services />} /> */}
          <Route
            path="/student-login"
            element={<StudentLogin setIsLogged={setIsLogged} />}
          />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/student-dashboard" element={<StudentDash />} />
          <Route path="/student-id" element={<StudentId />} />
          <Route path="/course" element={<TuwaiqCourse />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/staff-dashboard" element={<StaffDash />} />
          <Route path="/services" element={<Services />} />

          <Route path="/note" element={<NoteHome />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/note/:id" element={<Notes />} />

          <Route path="/library" element={<Main />} />
          <Route path="/food" element={<Restaurant />} />
          <Route path="/order" element={<Order />} />

          <Route path="/map" element={<Map />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
