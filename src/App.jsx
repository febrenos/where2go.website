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
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    {/* logged */}
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/to-plan' element={<ToExplore/>}/>
                    <Route path='/rank' element={<Rank/>}/>
                    <Route path='/people' element={<People/>}/>
                    <Route path='/notifications' element={<Notifications/>}/>
                    <Route path='/calendar' element={<Calendar/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/chatbot' element={<Chatbot/>}/>
                </Routes>
            </Router>
        </>
    )
}