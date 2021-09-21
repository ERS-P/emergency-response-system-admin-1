import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Button,
  Table,
  Pagination,
  PaginationLink,
  PaginationItem,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
// import { getUserData } from "../../api/auth";
const Users = () => {
  // const [users, setUsers] = useState(getUserData);
  // useEffect(()=>console.log(users))

  return (
    <>
      <Container className="mt--10" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0"> Users</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>

                    {/* <th scope="col">National ID</th>
                    <th scope="col">State License</th> */}
                    <th scope="col">Accept</th>
                    <th scope="col">Decline</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {users.map((items, index) => {
                    return (
                      <tr key={index}>
                        <td>{items.userID}</td>
                        <td>{items.firstname}</td>
                        <td>{items.lastname}</td>
                        <td>{items.email}</td>
                        <td>+2335007728</td>
                        <td>
                          {" "}
                          <Button
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Accept
                          </Button>
                        </td>
                        <td>
                          <Button
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Delete
                          </Button>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
