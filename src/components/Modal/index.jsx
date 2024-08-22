import "../../styles/components/Modal.scss";

export default function Modal({ state, setState }) {
  const { showModal, image } = state;

  const hideModalState = {
    showModal: false,
    image: {}
  };

  return(
    <div className={`modal${showModal ? ' active' : ''}`}>
      <button
        className="modal__close"
        onClick={() => setState(hideModalState)}
      >
        &times;
      </button>

      <picture className={`modal__image${!showModal ? ' hide' : ''}`}>
        <img src={image.normal} srcSet={`${image.retina} 2x`} alt="card image" />
      </picture>
    </div>
  );
}
