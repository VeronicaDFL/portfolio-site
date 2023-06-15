import { Container,Row,Col } from "react-bootstrap"

export default function Footer () {
    const currentYear = new Date().getFullYear();
    return(
       <Container bg="dark" variant="dark" expand="lg" >
        <Row>
         <Col>
            <footer>
                <p className="text-center">&copy;Veronica De Felice {currentYear}</p>
            </footer>
         </Col>
        </Row> 
        </Container> 
    )
}