import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from 'reactstrap';

export const SignOut = ({isLogout,signOut,handleCancel}) => {
  const okButtonRef = useRef(null);

  const handleCancelClick = () => {
    okButtonRef.current = null; 
    handleCancel();
  }

  const handleModalShown = () => {
    if (okButtonRef.current !== null) {
      okButtonRef.current.click();
    }
  }
  
  return(
    <Modal show={isLogout} onShow={handleModalShown}>
      <Modal.Body>
        <div>
          <b>
            <p>
              Are you sure for logout ?
            </p>
          </b><br/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <a href="/" onClick={signOut}>
            <Button innerRef={okButtonRef} className='mr-2' color="success">
              Ok
            </Button>
          </a>
          <Button color="danger" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}