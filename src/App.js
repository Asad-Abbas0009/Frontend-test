import './App.css';
import Navbar from './Components/Navbar';
import { UserProvider } from "./UserContext";
import Login from './Components/Login';
import SignUp from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import StudentDashboard from './Pages/StudentDashboard';
import TeacherDashboard from './Pages/TeacherDashboard';
import Assignments from './Components/Assignment';
// import StudentPatientRegistration from './Components/StudentPatientRegistration';
import TeacherHome from './Components/TeacherHome';
import StudentHome from './Components/StudentHome';
import TeacherCaseLibrary from './Components/TeacherCaseLibrary';
import Chatbot from './Components/Chatbot';
// import Patient from './Components/PatientRegistration';
// import Report from './Components/Reports';
import { useState, useEffect } from 'react';
import ImageComparison from './Components/ImageComparison';
import CaseReview from './Components/CaseReview'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on app load
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // Set true if user exists in localStorage
  }, []);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    setIsLoggedIn(false); // Update state
};


  return (
    <UserProvider>
    <div>
      {/* Navbar with dynamic props */}
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/student-dashboard/*' element={<StudentDashboard />} >
          <Route path='home' element={<StudentHome />} />
          <Route path="assignments" element={<Assignments studentName={localStorage.getItem("studentName")} />}/>
          <Route path='patient' element={<ImageComparison/>} />
          <Route path='report' element={<Chatbot />} />
        </Route>
        <Route path='/teacher-dashboard/*' element={<TeacherDashboard />}>
          <Route path='home' element={<TeacherHome />} />
          <Route path='case-library' element={<TeacherCaseLibrary />} />
          {/* <Route path='patient' element={<Patient />} /> */}
          <Route path='report' element={<CaseReview />} />
        </Route>
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;
