import { useRoutes } from "react-router-dom"
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
       <h1>Welcome to the Crewmate Creator!</h1>
       <p>Here is where you can create your very own set of crewmates before sending off into space!</p>
      </div>
    </div>
  )
}

export default App
