import React from "react";
import {Modal} from "react-bootstrap";
import {  Button } from 'reactstrap';

export const SignOut = ({isLogout,signOut,handleCancel}) => {
    return(
        <Modal show={isLogout}>
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
                        <Button className='mr-2' color="success">
                            Ok
                        </Button>
                    </a>
                    <Button color="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

