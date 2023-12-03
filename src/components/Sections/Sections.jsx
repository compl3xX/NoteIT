import React from "react";
import NoteCard from "../NoteCard/NoteCard";

const Sections = ({ pinnedNotes, notes }) => {
  return (
    <div style={{ width: "98%" }}>
      <div>
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
      <p className="pin-title">Other Notes</p>
      <div style={{ display: "flex" }}>
        <NoteCard notes={notes} type="allnotes" />
      </div>
    </div>
  );
};

export default Sections;
