import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./Sections.scss";

const Sections = ({ pinnedNotes, notes }) => {
  return (
    <div style={{ width: "98%" }}>
      <div style={{ marginBottom: "20px" }}>
        {pinnedNotes.length > 0 ? (
          <>
            <p className="pin-title">Pinned Notes</p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {" "}
              <NoteCard notes={pinnedNotes} type="allnotes" />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <p className="pin-title">All Notes</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <NoteCard notes={notes} type="allnotes" />
      </div>
    </div>
  );
};

export default Sections;
