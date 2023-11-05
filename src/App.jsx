import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AllNotes, ArchiveNotes, TrashNotes } from './pages/index'
import { SideBar, NavBar } from './components/index'

function App() {

  return (

    <BrowserRouter>
      <div className="mainContainer">
        <SideBar />
        <NavBar/>
        <div className="subContainer">
        
          <Routes>

            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            
          </Routes>

        </div>

      </div>


    </BrowserRouter>


  )
}

export default App
