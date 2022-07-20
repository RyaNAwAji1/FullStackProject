import react from "react";
const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        {" "}
        <button className="close" onClick={onClose}>
          <button className="x">x</button>
        </button>
        <div className="overlay-inner">
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button className="button-29">
                  اعرف اكثر
                </button>

              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
