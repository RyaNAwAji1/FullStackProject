import React from "react";
import { useState } from "react";
import "../../Css/Note.css";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
const AddNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addToDb = async (e) => {
    const request = await fetch("/api/v1/notes/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    navigate("/note");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "تم اضافة المذكره",
      showConfirmButton: false,
      timer: 2000,
    });
    const data = await request.json();

    console.log(data);
  };
  const back = (e) => {
    navigate("/note");
  };

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-head"
        placeholder="عنوان المذكرة"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        id="gg"
        className="form-field"
        placeholder="نص المذكرة"
        style={{ resize: "none" }}
      />
      <div className="btn-group">
        <button onClick={addToDb} type="button" className="btn-note-add">
          إضافة
        </button>
        <button onClick={back} type="button" className="btn-note-back">
          رجوع
        </button>
      </div>
    </>
  );
};

export default AddNote;
