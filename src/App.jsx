import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AllNotes, ArchiveNotes, Tag, TrashNotes } from './pages/index'
import { SideBar, NavBar, CreateNoteModal, CreateTagModal, SearchBar } from './components/index'
import { useSelector } from "react-redux"


function App() {

  const { editTagModal, createNoteModal } = useSelector(state => state.modal)

  return (

    <div className="mainContainer">

      {createNoteModal && <CreateNoteModal />}

      {editTagModal && <CreateTagModal mode="edit" />}

      <BrowserRouter>
        <SideBar />
        <div className="subContainer">
          <NavBar />
          <SearchBar />

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
