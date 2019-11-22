import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import axios from 'axios';

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData: []
    };
  }

  getUsers () {
    axios.get('https://clonedana.herokuapp.com/api/users')
        .then(res => {
          this.setState({
            usersData: res.data.data
          });
        })
        .catch(err => {

        })
  }

  componentDidMount(){
    this.getUsers()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <td>No.</td>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.usersData.map((data, idx) => (
                  <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>Rp.{data.balance}</td>
                    <td>{data.type_user}</td>
                    <td>
                      <Badge color="success">Premium</Badge>
                    </td>
                  </tr>
                  ))}
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>

          </Row>
      </div>
    );
  }
}

export default Tables;
