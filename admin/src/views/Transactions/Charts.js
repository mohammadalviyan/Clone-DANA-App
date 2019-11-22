import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Badge,Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import axios from 'axios';

class Charts extends Component {
  constructor(props) {
    super(props);

    this.removeTransactions = this.removeTransactions.bind(this);
    this.updateTransactions = this.updateTransactions.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalClose = this.toggleModalClose.bind(this);
    this.state = {
      collapse: true,
      modals: false,
      fadeIn: true,
      timeout: 300,
      transactionsData: [],
      transactionsDataUpdate: {}
    };
  }

  getTransactions () {
    axios.get('https://clonedana.herokuapp.com/api/transactions', {headers: {"x-access-token": this.state.token}})
        .then(res => {
          this.setState({
            transactionsData: res.data.data
          });
        })
        .catch(err => {

        })
  }

  removeTransactions(e){
    axios.delete(`https://clonedana.herokuapp.com/api/transactions/${e.currentTarget.value}`)
      .then(() =>
        {
          this.getTransactions()
        })
  }

  updateTransactions(e){
    axios.put(`https://clonedana.herokuapp.com/api/transactions/${this.state.transactionsDataUpdate.id}`)
    .then(() =>
      {
        this.getTransactions()
        this.toggleModalClose()
      })
  }

  componentDidMount() {
    this.getTransactions()
  }

  toggleModal(row) {
    this.setState({
      transactionsDataUpdate: row,
      modals: !this.state.modals
    });
  }

  toggleModalClose() {
    this.setState({
      modals: !this.state.modals
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
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
                    <th>No.</th>
                    <th>Invoice</th>
                    <th>User Id</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.transactionsData.map((data, idx) => (
                  <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{data.invoice}</td>
                    <td>{data.id_user}</td>
                    <td>Rp.{data.amount}</td>
                    <td>{data.payment_method}</td>
                    <td>
                      <Badge color="success">{data.status}</Badge>
                    </td>
                    <td>
                      <Button size="sm" color="primary" value={data.id} onClick={() => this.toggleModal(data)}>
                        <i className="fa fa-edit"></i>update</Button>&nbsp;
                      <Button size="sm" color="danger" value={data.id} onClick={this.removeTransactions}>
                        <i className="fa fa-trash"></i>delete</Button>
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
            <Modal isOpen={this.state.modals} toggle={this.toggleModal} className={'modal-sm ' + this.props.className}>
              <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
              <ModalBody>
                <Form encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Amount</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="number" id="amount" name="amount" defaultValue={this.state.transactionsDataUpdate.amount}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Status</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="status" name="status" defaultValue={this.state.transactionsDataUpdate.status}/>
                  </Col>
                </FormGroup>
              </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.updateTransactions}>Update</Button>{' '}
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Charts;
