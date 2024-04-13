import React from 'react';
import Navbar from '../Components/Navbar';
import NewCreatemate from '../Components/NewCrewmate';
import '../index.css';

function NewCreatemateView(){
    return(
        <div className="app-container">
        <div className="sidebar">
            <Navbar />
        </div>
        <div className="main-content">
            <NewCreatemate/>
        </div>
        </div>
    )
}
export default NewCreatemateView;