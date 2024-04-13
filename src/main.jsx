import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import './App.css';
import App from './App.jsx';
import NewCreatemateView from './Routes/NewCrewmateView.jsx';
import GalleryView from './Routes/GalleryView.jsx';
import UpdateCrewmateView from './Routes/UpdateCrewmateView.jsx';
import CrewmateDetailsView from './Routes/CrewmateDetailsView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/NewCreatemate" element={<NewCreatemateView />} />
      <Route path="/Gallery" element={<GalleryView />} />
      <Route path="/Gallery/EditCrewmate/:id" element={<UpdateCrewmateView />} />
      <Route path="/Gallery/CrewmateDetails/:id" element={<CrewmateDetailsView />} />
    </Routes>

    </BrowserRouter>
  </React.StrictMode>,

);
