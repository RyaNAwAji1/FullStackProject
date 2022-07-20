import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "../../Css/Note.css";

const NoteHome = () => {
  const [noteList, setNoteList] = useState([]);
  const takeMeToThisPage = useNavigate();

  const toAddNote = (e) => {
    takeMeToThisPage("/add");
  };

  useEffect((e) => {
    const getNotes = async () => {
      const request = await fetch("/api/v1/notes/");
      const data = await request.json();
      setNoteList(data);
    };
    getNotes();
  }, []);

  return (
    <>
      <h1>مذكرات الطالب</h1>
      <div>
        <NoteList noteList={noteList} />
        <button
          onClick={toAddNote}
          type="button"
          className="btn-note-add-new"
        >
          اضافة مذكرة جديدة
        </button>
      </div>
    </>
  );
};

export default NoteHome;
