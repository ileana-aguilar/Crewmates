import React from 'react';
import Navbar from '../Components/Navbar';
import Gallery from '../Components/Gallery';
import '../index.css';

function GalleryView(){
    return(
        <div className="app-container">
        <div className="sidebar">
            <Navbar />
        </div>
        <div className="main-content">
            <Gallery/>
        </div>
        </div>
    )
}
export default GalleryView;