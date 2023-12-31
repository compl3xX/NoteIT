import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllNotes, ArchiveNotes, Tag, TrashNotes } from "./pages/index";
import {
  SideBar,
  NavBar,
  CreateNoteModal,
  CreateTagModal,
  SearchBar,
  FilterModal,
} from "./components/index";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilterModal, toggleMenu } from "./features";


function App() {
  const { editTagModal, createNoteModal, filterModal } = useSelector(
    (state) => state.modal
  );
  const isOpen = useSelector(state => state.menu.isOpen)
  console.log(isOpen)

  const dispatch = useDispatch();

  return (
    <div className="mainContainer">

      {createNoteModal && <CreateNoteModal />}

      {editTagModal && <CreateTagModal mode="edit" />}

      {isOpen && <div onClick={() => { dispatch(toggleMenu(isOpen)) }} className="backdrop" ></div>}

      <BrowserRouter>
        <SideBar />
        <div className="subContainer">
          <NavBar />

          <div className="subContainer_items">
            <SearchBar />
            <button
              style={{ minWidth: "80px" }}
              onClick={() => {
                dispatch(toggleFilterModal(true));
              }}
            >
              Filter
            </button>
          </div>

          {filterModal && <FilterModal />}
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<Tag />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
