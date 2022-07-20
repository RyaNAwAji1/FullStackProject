import React from "react";
import NoteItems from "./NoteItems";
import "../../Css/Note.css";

const NoteList = ({ noteList }) => {
  return (
    <ul className="list-group">
      {noteList.map((item, index) => (
        <NoteItems item={item} key={index} />
      ))}
    </ul>
  );
};

export default NoteList;
