import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchTerm, searchNotes } from "../../features";

const SearchBar = () => {

    const [searchText, setSearchText] = useState("");

    const trashNote = useSelector(state => state.note.trashNotes)

    const archiveNote = useSelector(state => state.note.archiveNotes)

    const allNote = useSelector(state => state.note.allNotes)

    const { pathname } = useLocation();

    const dispatch = useDispatch()

    const searched = useSelector(state => state.search.searched)

    const searchFn = (note) => {
        return note.title.toLowerCase().includes(searched.toLowerCase())
    }

    const filterNotes = () => {


        let filteredNotes;

        if (pathname === '/archive') {
            filteredNotes = archiveNote.filter((note) => (searchFn(note)))
        }

        else if (pathname === '/trash') {
            filteredNotes = trashNote.filter((note) => (searchFn(note)))
        }

        else if (pathname === '/') {
            filteredNotes = allNote.filter((note) => (searchFn(note)))
        }

        else {

            const tagNote = allNote.filter(({ tag }) => (tag.find(({ tagName }) => tagName === pathname.slice(5))))
            
            filteredNotes = tagNote.filter((note) => (searchFn(note)))
        }

        dispatch(searchNotes(filteredNotes))

    }

    const handelKey = (e) => {
        if (e.key === 'Enter') filterNotes();
    }

    const handelSearchMech = (e) => {
        dispatch(searchTerm(e.target.value))
        filterNotes()
    }

    return (

        <div>
            <IoSearch />
            <input onChange={handelSearchMech} />
            <button onClick={filterNotes}>Search</button>
        </div>
    )
}

export default SearchBar