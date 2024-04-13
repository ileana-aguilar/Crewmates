import React from 'react';
import Navbar from '../Components/Navbar';
import UpdateCrewmate from '../Components/UpdateCrewmate';
import '../index.css';

function UpdateCrewmateView(){
    return(
        <div className="app-container">
        <div className="sidebar">
            <Navbar />
        </div>
        <div className="main-content">
            <UpdateCrewmate/>
        </div>
        </div>
    )
}
export default UpdateCrewmateView;