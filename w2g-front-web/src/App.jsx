import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { GlobalStyle } from './style'; 

import Home from './pages/Home/index'
import Profile from './pages/Profile/index'
import ToExplore from './pages/ToPlan/index'
import Chatbot from './pages/Chatbot/index'
import Notifications from './pages/Notifications/index'
import Calendar from './pages/Calendar/index'
import Rank from './pages/Rank/index'
import Settings from './pages/Settings/index'
import SignUp from './pages/Access/SignUp'
import SignIn from './pages/Access/SignIn'
import People from './pages/People';

// cnd fontweasome
export default function App(){
    return(
        <>
            <GlobalStyle /> 
            <Router>
                <Routes>
                    {/* not logged */}
                    <Route path='/SignIn' element={<SignIn/>}/>
                    <Route path='/SignUp' element={<SignUp/>}/>
                    {/* logged */}
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/ToPlan' element={<ToExplore/>}/>
                    <Route path='/Rank' element={<Rank/>}/>
                    <Route path='/People' element={<People/>}/>
                    <Route path='/Notifications' element={<Notifications/>}/>
                    <Route path='/Calendar' element={<Calendar/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                    <Route path='/Chatbot' element={<Chatbot/>}/>
                </Routes>
            </Router>
        </>
    )
}