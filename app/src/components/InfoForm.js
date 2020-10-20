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
                Number of Tents
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
                Number of Customers
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
                Eletrified
              </label>
              <select class="custom-select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            {/* community size */}
            <div className="form-group">
              <label for="exampleInputPassword1">
                <i className="fas fa-users w3-xlarge w3-text-teal w3-margin-right"></i>
                Community size
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            {/* number of tents without eletrified */}
            <div className="form-group">
              <label for="exampleInputPassword1">
                <i className="fas fa-users w3-xlarge w3-text-teal w3-margin-right"></i>
                # of tents without eletrified
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            {/* verified */}
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Verified by Pollinate
              </label>
            </div>

            {/* served by Pollinate */}
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Served by Pollinate
              </label>
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
