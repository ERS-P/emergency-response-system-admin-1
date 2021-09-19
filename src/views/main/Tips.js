import React, { useEffect, useState, useContext } from "react";
import {
  Card,
  CardHeader,
  Container,
  Row,
  CardBody,
  Form,
  Col,
  FormGroup,
  Input,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Footer } from "../../components/gen";
import { AppContext } from "../../context";

const Tips = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { submitTips } = useContext(AppContext);

  const handleTitleChange = event => {
    const title_val = event.target.value;
    setTitle(title_val);
  };

  const handleDescriptionChange = event => {
    const desc_value = event.target.value;
    setDescription(desc_value);
  };

  const onSubmit = () => {
    setLoading(true);
    submitTips({ title, description, setLoading });
    // setLoading(false);
  };

  return (
    <>
      <Container className="mt--10" fluid>
        <Row>
          <div className="col">
            <Card className="bg-secondary shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Tips</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Send Emergency Tips
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-tips"
                          >
                            Title
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Fire Emergency Tips"
                            id="input-tips"
                            placeholder="Tips"
                            type="text"
                            value={title}
                            onChange={event => handleTitleChange(event)}
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-significance"
                          >
                            Type
                          </label>
                          <UncontrolledDropdown
                            isOpen={dropdownOpen}
                            toggle={toggle}
                          >
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Fire
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Flood
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Violence
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>

                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-significance"
                            placeholder="Education"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Details</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Description</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="8"
                        // defaultValue="Fire is an uncontrollable flame that can destroy your property"
                        type="textarea"
                        value={description}
                        onChange={event => handleDescriptionChange(event)}
                      />
                    </FormGroup>
                  </div>
                  <div className="pl-lg-4">
                    <FormGroup>
                      {loading === false ? (
                        <Button
                          color="info"
                          onClick={() => onSubmit(title, description)}
                        >
                          Send Tips
                        </Button>
                      ) : (
                        <Button color="info">Please wait...</Button>
                      )}
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tips;
