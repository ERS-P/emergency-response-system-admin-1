import React from "react";
import { Footer } from "../../components/gen";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";

const Notifications = () => {
  return (
    <div>
      <Container className="mt--10" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Emergency Reports</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Post ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Severity</th>
                    <th scope="col">Location</th>
                    <th scope="col">View Details</th>
                    <th scope="col">Dispatch</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {/* {report.map((item, index) => {
                    getURL(item.postId);
                    return (
                      <tr key={index}>
                        <td>{item.posterUserID}</td>
                        <td>{item.title}</td>
                        <td>{item.postSeverity === true ? "High" : "Low"}</td>
                        <td>{item.town === "" ? "Legon" : item.town}</td>
                        <td>
                          <Button
                            color="info"
                            onClick={() =>
                              openReportModal({
                                postId: item.postId,
                                lat: item.postRegion.latitude,
                                long: item.postRegion.longitude,
                                date: item.date,
                                description: item.description,
                                time: item.time,
                                type: item.type,
                                verified: item.verified.verified,
                                numComments: item.numComments,
                                // postImage: ,
                                postImg: img,
                              })
                            }
                            size="sm"
                          >
                            View Details
                          </Button>
                        </td>
                        <td>
                          {status === false ? (
                            <Button
                              color="success"
                              onClick={() =>
                                dispatchFunc({
                                  town: item.town,
                                  type: item.type,
                                })
                              }
                              size="sm"
                            >
                              Dispatch
                            </Button>
                          ) : (
                            <Button
                              color="danger"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              Proccessing
                            </Button>
                          )}
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              role="button"
                              size="sm"
                              color=""
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="/admin/report"
                                onClick={() => removePosts(item.postId)}
                              >
                                Delete
                              </DropdownItem>
                              <DropdownItem onClick={e => e.preventDefault()}>
                                Forward
                              </DropdownItem>
                              <DropdownItem onClick={e => e.preventDefault()}>
                                Reply
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        className="bg-info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Notifications;
