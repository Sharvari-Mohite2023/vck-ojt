import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import NotFoundPage from './pages/NotFoundPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'


const App=() => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
  setShowPopup(false);
  };
  return (
    <>    
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sharvari Satyajeet Mohite"
          studentPhotoUrl="/images/saniya.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <div>
        <BrowserRouter>  
            <Routes>  
                <Route path='/' element={<Home/>}></Route>
                <Route path='/AboutPage' element={<AboutPage/>}></Route>
                <Route path='/AdmissionsPage' element={<AdmissionsPage/>}></Route>
                <Route path='/ContactPage' element={<ContactPage/>}></Route>
                <Route path='/CoursesPage' element={<CoursesPage/>}></Route>
                <Route path='/NotFoundPage' element={<NotFoundPage/>}></Route>
            </Routes>
          <ChatbotComponent/>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App;
