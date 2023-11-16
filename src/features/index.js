export { default as NotesReducer } from './Notes/NotesSlice'
export { default as ModalReducer } from './Modal/ModalSlice.js'
export { default as TagReducer } from './Tags/TagSlice.js'

export { noteAdd, addToArchive, addToTrash, editNote, pinNote, unArchiveNote, unTrashNote,deleteNote } from './Notes/NotesSlice'

export { toggleCreateNodeModal, toggleCreateTagModal } from './Modal/ModalSlice.js'

export { addTag } from './Tags/TagSlice.js'