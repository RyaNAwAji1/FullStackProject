import react from "react";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  return (
    <>
      {
        // eslint-disable-next-line array-callback-return
        book.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;

          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        })
      }
    </>
  );
};
export default Card;
