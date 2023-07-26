import "./Modal.css";

function Modal({ isOpen, onClose }) {
  return (
    <aside className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__container">
        <div className="modal__icon"></div>
        <p className="modal__message">Пользователь с таким email уже существует.</p>
        <button type="button" className="modal__close-btn" onClick={onClose}></button>
      </div>
    </aside>
  );
}

export default Modal;
