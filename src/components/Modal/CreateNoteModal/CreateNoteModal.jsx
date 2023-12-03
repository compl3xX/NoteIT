import "./CreateNoteModal.scss";
import { useDispatch, useSelector } from "react-redux";
import BaseModal from "../BaseModal/BaseModal";
import TextEditor from "../../TextEditor/TextEditor";
import { toggleCreateNodeModal } from "../../../features";
import CreateTagModal from "../CreateTagModal/CreateTagModal";
import { useState } from "react";
import { v4 } from "uuid";

const CreateNoteModal = () => {
  const EditNote = useSelector((state) => state.note.editNote);

  const [title, setTitle] = useState(EditNote?.title || "");

  const [content, setContent] = useState(EditNote?.content || "");

  const [priority, setPriority] = useState(EditNote?.priority || "Low");

  const [selTags, setSelTags] = useState(EditNote?.tag || []);

  const dispatch = useDispatch();

  const { addTagModal, createNoteModal } = useSelector((state) => state.modal);

  const closeModal = () => {
    dispatch(toggleCreateNodeModal(false));
  };

  const handelTags = ({ tag, type }) => {
    if (type === "add") {
      setSelTags([...selTags, { tagName: tag, id: v4() }]);
    } else {
      setSelTags(selTags.filter((selTag) => selTag.tagName !== tag));
    }
  };

  return (
    <BaseModal closeModal={closeModal}>
      <div>
        {addTagModal && (
          <CreateTagModal
            mode="add"
            handelTags={handelTags}
            selTags={selTags}
          />
        )}
        <TextEditor
          editorProps={{
            title,
            setTitle,
            content,
            setContent,
            setPriority,
            priority,
            selTags,
            setSelTags,
            handelTags,
            EditNote,
          }}
        />
      </div>
    </BaseModal>
  );
};

export default CreateNoteModal;
