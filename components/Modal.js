import { useRef, useEffect } from "react";

const Modal = props => {
  const closeButton = useRef(null);

  const submitModal = () => {
    closeButton.current.click();
  };
  
  useEffect(() => {
    if (props.createButtonClicked) {
      submitModal()
    }
  }, [props.createButtonClicked])

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mb-4"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Create Movie
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                ref={closeButton}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>

              <button
                onClick={submitModal}
                type="button"
                className="btn btn-primary"
                disabled={true}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
