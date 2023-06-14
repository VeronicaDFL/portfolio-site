import { Container, Row, Col } from "react-bootstrap" 
import Layout from "../layout/AppLayout"
import Gallery from "../layout/Gallery"

export default function Portfolio () {

    return (
        <Layout>
            <Container id="gallery">
                <Row>
                    <Col className="text-center">
                        <h2>Portfolio</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>Portfolio</p>
                    </Col>
                </Row>
            </Container>
            <Gallery/>
        </Layout>


    )
}
