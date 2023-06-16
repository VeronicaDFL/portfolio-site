import { Container,Row,Col } from "react-bootstrap"

export default function Footer () {
    const currentYear = new Date().getFullYear();
    return(
       <Container fluid className="bottom"  >
        <Row>
         <Col>
            <footer>
                <h4 className="text-center">&copy;Veronica De Felice {currentYear}</h4>
            </footer>
         </Col>
        </Row> 
        </Container> 
    )
}