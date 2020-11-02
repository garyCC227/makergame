import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function InfoForm({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Update Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* number of Tents */}
            <div className="form-group">
              <label for="exampleInputEmail1">
                <i className="fas fa-users w3-xlarge w3-text-teal w3-margin-right"></i>
                Serve By Pollinate
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            {/* number of customer */}
            <div className="form-group">
              <label for="exampleInputPassword1">
                <i className="fas fa-users w3-xlarge w3-text-teal w3-margin-right"></i>
                Slum Type
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            {/* eletrified? */}
            <div className="form-group">
              <label for="exampleInputPassword1">
                <i className="fas fa-charging-station w3-xlarge w3-text-teal w3-margin-right"></i>
                Electrified
              </label>
              <select class="custom-select">
                <option selected>Select Electrified Type..</option>
                <option value="1">Fully Electrified</option>
                <option value="2">Partially Electrified</option>
                <option value="3">Not Electrified</option>
              </select>
            </div>

            {/* community size */}
            <div className="form-group">
              <label for="exampleInputPassword1">
                <i className="fas fa-users w3-xlarge w3-text-teal w3-margin-right"></i>
                Slum Size
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
