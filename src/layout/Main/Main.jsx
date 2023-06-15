import { Container,Row,Col} from "react-bootstrap"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 export default function Main() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
    

    return (
        
            <Container className="part-one " >
                <Row >
                    <Col>
                    </Col>
                    <Col className="intro">
                     <h1>Hello, I'm Veronica, welcome to my page! Here, you'll discover a collection of my work and learn a few things about me.</h1>
                     <>
                          {values.map((v, idx) => (
                            <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                              More...
                              {typeof v === 'string' && `below ${v.split('-')[0]}`}
                            </Button>
                          ))}

                          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                            <Modal.Header closeButton>
                              <Modal.Title>Title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Description</Modal.Body>
                          </Modal>
                    </>
                   </Col>
                </Row>
            </Container>
      

    )
}
               
      

