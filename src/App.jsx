import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AllNotes, ArchiveNotes, Tag, TrashNotes } from './pages/index'
import { SideBar, NavBar } from './components/index'

function App() {

  return (
    <div className="mainContainer">

      <BrowserRouter>
        <SideBar />
        <div className="subContainer">
          <NavBar />

          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<Tag />} />
          </Routes>

        </div>
      </BrowserRouter >

    </div>

  )
}

export default App
