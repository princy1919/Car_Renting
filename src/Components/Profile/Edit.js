import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";

export const DisplayProfile = ({profileData}) => {
    return (
        <div className="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="home-tab">
            <div className="row">
                <div className="col-md-6">
                    <label>First Name</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.firstName}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Last Name</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.lastName}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Email</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.emailId}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Mobile</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.mobile}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Date Of Birth</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.dob}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Gender</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.gender}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Country</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.country}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>State</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.state}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>City</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.city}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Pincode</label>
                </div>
                <div className="col-md-6">
                    <p>{profileData.pincode}</p>
                </div>
            </div>
        </div>
    )
}

export const EditProfile = ({profileData,onInputChange,update}) => {
    return (
        <>
            <div className="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="home-tab">
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">First Name</Label>
                                <Input
                                    type="email"
                                    name="firstName"
                                    value={profileData.firstName}
                                    onChange={onInputChange}
                                    placeholder="Enter First Name" />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={profileData.lastName}
                                    onChange={onInputChange}
                                    placeholder="Enter Last Name"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="text"
                                    name="emailId"
                                    value={profileData.emailId}
                                    disabled
                                    onChange={onInputChange}
                                    placeholder="Enter Email"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Mobile</Label>
                                <Input
                                    type="number"
                                    name="mobile"
                                    value={profileData.mobile}
                                    onChange={onInputChange}
                                    placeholder="Enter Mobile Number"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleCity">Country</Label>
                                <Input
                                    type="text"
                                    value={profileData.country}
                                    onChange={onInputChange}
                                    name="country"
                                    placeholder="Enter Country"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">State</Label>
                                <Input
                                    type="text"
                                    name="state"
                                    value={profileData.state}
                                    onChange={onInputChange}
                                    placeholder="Enter State"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label>
                                <Input
                                    type="text"
                                    name="city"
                                    value={profileData.city}
                                    onChange={onInputChange}
                                    placeholder="Enter City"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleZip">Pincode</Label>
                                <Input
                                    type="text"
                                    name="pincode"
                                    value={profileData.pincode}
                                    onChange={onInputChange}
                                    placeholder="Enter Pincode"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button className="badge-success" onClick={update}>Update</Button>
                </Form>
            </div>
        </>
    )
}