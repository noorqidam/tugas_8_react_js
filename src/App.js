import React, {Component} from 'react';
import { Container, Row, Col, Button, Breadcrumb, Carousel, Dropdown, Form, Image, Jumbotron, ListGroup, Modal } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      show: false
    }
  }

  render(){
    return (
      <Container fluid>
        <Row style={{color:"white", backgroundColor:"black", marginTop:"10px"}}>
          <Col>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Pilih Bahasa
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Indonesia</Dropdown.Item>
              <Dropdown.Item href="#">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Col>
          <Col xs={6}></Col>
          <Col style={{textAlign:"center"}}><Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" roundedCircle width={50} height={50} />
          <p>Alan Saputra</p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Carousel>
              <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              alt="First slide" />
              <Carousel.Caption>
              <h4>Neymar Bahas Kontrak Baru Di Paris Saint-German</h4>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt="Third slide" />
              <Carousel.Caption>
              <h4>Inggris Mau Jadi Tim Terbaik Di Dunia</h4>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
              alt="Third slide"/>
              <Carousel.Caption>
                <h4>Sani Riski Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h4>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col xs={3}>
          <ListGroup>
            <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
            <ListGroup.Item disabled>Divisi Primera</ListGroup.Item>
            <ListGroup.Item>Serie A</ListGroup.Item>
            <ListGroup.Item>Ligue 1</ListGroup.Item>
            <ListGroup.Item>Bundes Liga</ListGroup.Item>
          </ListGroup>
          </Col>
          <Col xs={5}>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <p>
                <Button variant="primary">Read more</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col xs={4}>
            <Form>
              <Form.Group style={{textAlign:"center"}}>
                <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" roundedCircle width={60} height={60} />
                <h2>Silahkan Login</h2>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Masukan Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Terms & Conditions" />
              </Form.Group>
              <Button onClick={() => this.setState({ show: !this.state.show})} variant="primary">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
        <Modal show={this.state.show} onHide={() => this.setState({ show: !this.state.show})}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Anda Berhasil LOGIN</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({ show: !this.state.show})} variant="secondary" >
              Close
            </Button>
            <Button onClick={() => this.setState({ show: !this.state.show})} variant="primary">
              Save Username & Password
            </Button>
          </Modal.Footer>
        </Modal>
        </Row>
      </Container>
    );
  }
}

export default App;