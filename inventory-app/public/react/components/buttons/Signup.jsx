import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal"

const Signup = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
      <Button variant="outline-primary ms-2"  onClick={handleShow}>
      <span className="fa fa-user-plus me-1"></span> Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-google me-2"></span>Sign up With Google
        </button>
        <button className="btn btn-primary w-100 mb-4">
            <span className="fa fa-facebook me-2"></span>Sign up With Facebook
        </button>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleUser" className="form-label">Username</label>
                <input type="email" className="form-control" id="exampleUser"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me for 7 days</label>
            </div>
            <button type="submit" className="btn btn-outline-primary w-100 mt-3">Register</button>
        </form>
        </Modal.Body>
      </Modal>

        </>
    )
}

export default Signup