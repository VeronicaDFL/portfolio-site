import { Container,Row,Col} from "react-bootstrap"
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

 export default function Main() {
  const [lgShow, setLgShow] = useState(false);
 



    return (
        
            <Container className="part-one " >
                <Row >
                    <Col>
                    </Col>
                    <Col className="intro">
                     <h1>Hello, I'm Veronica, welcome to my page! Here, you'll discover a collection of what I have learned during my Software Engineering career path till now and a few things about me!</h1>
                      <>
                        <Button variant="dark" size="sm" onClick={() => setLgShow(true)}>Contact Info</Button>
                        <Modal
                          size="lg"
                          show={lgShow}
                          onHide={() => setLgShow(false)}
                          aria-labelledby="example-modal-sizes-title-lg"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                              Email Me @:
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>verodefelic@gmail.com</Modal.Body>
                        </Modal>
                      </>
                   </Col>
                </Row>
            </Container>
      

    )
}
               
      

