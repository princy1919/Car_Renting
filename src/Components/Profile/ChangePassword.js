import {Button, Col, Form, FormGroup, Input, Row} from "reactstrap";
import React from "react";

export const ChangePassword = ({oldPassError,newPassError,conPassError,onPassChange,updatePassword,oldPass,newPass,conPass}) => {
    return(
        <div className="tab-pane fade" id="changepassword" role="tabpanel" aria-labelledby="profile-tab">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Input
                                type="password"
                                name="oldPass"
                                value={oldPass || ""}
                                onChange={onPassChange}
                                placeholder="old password"
                            />
                            <p style={{color:"red"}}> {oldPassError}</p>
                        </FormGroup>

                    </Col>

                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Input
                                type="password"
                                name="newPass"
                                value={newPass || ""}
                                onChange={onPassChange}
                                placeholder="new password"
                            />
                            <p style={{color:"red"}}>{newPassError}</p>
                        </FormGroup>

                    </Col>

                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Input
                                type="password"
                                name="conPass"
                                value={conPass || ""}
                                onChange={onPassChange}
                                placeholder="confirm password"
                            />
                            <p style={{color:"red"}}>{conPassError}</p>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <Button className="badge-success" onClick={updatePassword}>Save</Button>
        </div>
    )
}
