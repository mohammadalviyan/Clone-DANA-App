import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Pagination, PaginationItem, PaginationLink, Table
} from 'reactstrap';

import axios from 'axios';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.postArticles = this.postArticles.bind(this);
    this.removeArticles = this.removeArticles.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      articlesData: [],
      articlesDataPost: {
        icon: '',
        title: '',
        name: '',
        image: '',
        description: ''
      }
    };
  }

  getArticles () {
    axios.get('https://clonedana.herokuapp.com/api/news')
        .then(res => {
          this.setState({
            articlesData: res.data.data
          });
        })
        .catch(err => {

        })
  }

  postArticles(){
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    const formData = new FormData();
    formData.append('icon', this.state.articlesDataPost.icon);
    formData.append('title', this.state.articlesDataPost.title);
    formData.append('name', this.state.articlesDataPost.name);
    formData.append('image', this.state.articlesDataPost.image);
    formData.append('description', this.state.articlesDataPost.description);

    axios.post('https://clonedana.herokuapp.com/api/news', formData, config)
        .then(() =>
        {
          this.getArticles()
        })
  }

  removeArticles(e){
    axios.delete(`https://clonedana.herokuapp.com/api/news/${e.currentTarget.value}`)
      .then(() =>
        {
          this.getArticles()
        })
  }

  inputChange(e) {
    let newArticle = {...this.state.articlesDataPost}
    newArticle[e.currentTarget.name] = e.currentTarget.value;
    console.log(newArticle);
    this.setState({
      articlesDataPost: newArticle
    });
  }

  imageChange(e) {
    let image = {...this.state.articlesDataPost}
    image[e.currentTarget.name] = e.target.files[0]
    this.setState({
      articlesDataPost: image
    });
  }

  componentDidMount(){
    this.getArticles()
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
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Article Forms</strong>
              </CardHeader>
              <CardBody>
                <Form encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="title" name="title" placeholder="Title" onChange={this.inputChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Sub Title</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Sub Title" onChange={this.inputChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="description" id="description" rows="9"
                             placeholder="Content..." onChange={this.inputChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="image" name="image" onChange={this.imageChange} />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.postArticles}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Articles Table
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <td>No.</td>
                    <th>Title</th>
                    <th>Sub title</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.articlesData.map((data, idx) => (
                  <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{data.title}</td>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                    <td>
                      <Button size="sm" color="danger" value={data.id} onClick={this.removeArticles}>
                        <i className="fa fa-trash"></i> delete</Button>
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

export default Forms;
