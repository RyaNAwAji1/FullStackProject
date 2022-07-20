import { useState } from "react";
import Card from "./Card";
import React from "react";
import "../../Css/Library.css";
const Main = () => {
  {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = async (evt) => {
      if (evt.key === "Enter" && search === "") {
        return;
      }
      try {
        if (evt.key === "Enter") {
          const request = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              search +
              "&key=" +
              "AIzaSyAc_OUO3lg8uXQAiFtH0ahr9XSkRnqLroA" +
              "&maxResults=30"
          );

          const data = await request.json();
          setData(data.items);
          if (request.status === 400) {
            return;
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <>
        <div className="father">
          <div className="header">
            <div className="row2">
              <h2>ابحث عن اي كتاب برمجي</h2>
            </div>
            <div className="search">
              <input
              className="library-search"
                type="text"
                placeholder="اسم الكتاب"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
              />
              <button className="button-29">بحث</button>
            </div>
          </div>
        </div>

        <div className="books-content">{<Card book={bookData} />}</div>
      </>
    );
  }
};
export default Main;
