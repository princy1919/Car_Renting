import {Modal} from "react-bootstrap";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {DropdownList} from "react-widgets";
import {Companies, Location, Seats, Time} from "../../globalUtilities/CONST";
import React from "react";

 export const CreateJourneyPost = ({isShare,onCreate,handleCancel,onImageChange,onHandleChange,data,onHandleDetailsChange}) => {
    return(
        <Modal size="lg" show={isShare} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Enter Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleEmail" sm={2}><b>Name</b></Label>
                        <Col sm={8}>
                            <Input type="text" name="fullName" id="exampleEmail"  onChange={onHandleChange} placeholder="Enter Full Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleEmail" sm={2}><b>Email</b></Label>
                        <Col sm={8}>
                            <Input type="text" name="email" id="exampleEmail" onChange={onHandleChange} placeholder="Enter Email ID" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleEmail" sm={2}><b>Mobile</b></Label>
                        <Col sm={8}>
                            <Input type="text" name="mobile" id="exampleEmail" onChange={onHandleChange} placeholder="Enter Mobile No" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleSelect" sm={2}><b>Date Of Journey</b></Label>
                        <Col sm={8}>
                            <Input type="date" name="date" onChange={onHandleDetailsChange} id="exampleSelect"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleSelectMulti" sm={2}><b>Pick up</b> </Label>
                        <Col sm={8}>
                            <DropdownList
                                onChange={(e)=>onHandleDetailsChange(e,"pickup")}
                                value={ data && data.journeyDetails.pickup || "Pickup Location"}
                                data={Location}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleSelectMulti" sm={2}><b>Drop</b></Label>
                        <Col sm={8}>
                            <DropdownList
                                onChange={(e)=>onHandleDetailsChange(e,"dropLocation")}
                                value={data.journeyDetails.dropLocation ||  "Destination Location"}
                                data={Location}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleSelectMulti" sm={2}><b>Time</b></Label>
                        <Col sm={3}>
                            <Input type="number" name="hours" onChange={(e)=>onHandleDetailsChange(e)} id="exampleEmail" placeholder="Hours" />
                        </Col>
                        <Col sm={3}>
                            <Input type="number" name="minute" onChange={onHandleDetailsChange} id="exampleEmail" placeholder="Minute" />
                        </Col>
                        <Col sm={2}>
                            <DropdownList
                                onChange={(e)=>onHandleDetailsChange(e,"time")}
                                value={data.journeyDetails.time || "am"}
                                data={Time}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleSelectMulti" sm={2}><b>Available Seats</b></Label>
                        <Col sm={8}>
                            <DropdownList
                                onChange={(e)=>onHandleDetailsChange(e,"seat")}
                                value={ data.journeyDetails.seat || "Select Seats"}
                                data={Seats}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleSelectMulti" sm={2}><b>Company</b></Label>
                        <Col sm={8}>
                            <DropdownList
                                onChange={(e)=>onHandleChange(e,"company")}
                                value={ data.company || "Select Company"}
                                data={Companies}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleEmail" sm={2}><b>Modal</b></Label>
                        <Col sm={8}>
                            <Input type="text" onChange={onHandleChange} name="modal" id="exampleEmail" placeholder="Enter modal Name" />
                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleEmail" sm={2}><b>Rent</b></Label>
                        <Col sm={8}>
                            <Input type="number" onChange={onHandleDetailsChange}  name="rent" id="exampleEmail" placeholder="Enter rent value" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}/>
                        <Label for="exampleEmail" sm={2}><b>Images</b></Label>
                        <Col sm={8}>
                            <input
                                type="file"
                                name="file"
                                onChange={onImageChange}
                                style={{cursor:"pointer"}}
                                />
                        </Col>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button color="success" onClick={onCreate}>
                    Create
                </Button>
                <Button color="danger" onClick={handleCancel}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

