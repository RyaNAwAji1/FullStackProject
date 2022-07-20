import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Notes = () => {
  const takeMeToThisPage = useNavigate();

  const backToNoteHome = (e) => {
    takeMeToThisPage(-1);
  };

  const parm = useParams();
  const id = parm.id;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const getNotes = async () => {
      const request = await fetch("/api/v1/notes/" + id);
      const data = await request.json();
      if (request.status === 200) {
        setBody(data.body);
        setTitle(data.title);
      }
      if (request.status === 400) {
        takeMeToThisPage("*");
      }
    };
    getNotes();
  }, []);

  return (
    <>
      <h1 className="text-center">{title}</h1>
      <textarea
      classNAme="form-body"
        readOnly
        value={body}
        className="form-control mt-3"
        rows={10}
        // style={{ resize: "none" }}
      />
      <button
        onClick={backToNoteHome}
        type="button"
        className="btn-note-back"
      >
        رجوع
      </button>
    </>
  );
};
export default Notes;
