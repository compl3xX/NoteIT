import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AllNotes, ArchiveNotes, Tag, TrashNotes } from './pages/index'
import { SideBar, NavBar, CreateNoteModal, CreateTagModal, SearchBar, FilterModal } from './components/index'
import { useSelector, useDispatch } from "react-redux"
import { toggleFilterModal } from "./features"


function App() {

  const { editTagModal, createNoteModal, filterModal } = useSelector(state => state.modal)

  const dispatch = useDispatch()

  return (

    <div className="mainContainer">

      {createNoteModal && <CreateNoteModal />}

      {editTagModal && <CreateTagModal mode="edit" />}

      <BrowserRouter>
        <SideBar />
        <div className="subContainer">
          <NavBar />

          <div className="subContainer_items">
            <SearchBar />
            <button onClick={() => { dispatch(toggleFilterModal(true)) }}>Filter</button>
          </div>

          {filterModal && <FilterModal />}
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
