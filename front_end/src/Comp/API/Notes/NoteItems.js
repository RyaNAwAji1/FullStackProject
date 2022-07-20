import React from "react";
import NoteList from "./NoteList";
import { Link } from "react-router-dom";
import "../../Css/Note.css";

const NoteItems = ({ item }) => {
  return (
    <>
      <li className="list-group-item text-center">
        <Link to={"/note/" + item.id}>{item.title}</Link>
      </li>
    </>
  );
};

export default NoteItems;
