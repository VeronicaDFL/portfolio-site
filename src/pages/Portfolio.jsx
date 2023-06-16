import { Container, Row, Col } from "react-bootstrap" 
import Layout from "../layout/AppLayout"
import Gallery from "../layout/Gallery"

export default function Portfolio () {

    return (
        <Layout>
            <Container id="gallery">
                <Row>
                    <Col className="text-center">
                        <h1>Portfolio</h1>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
            <Gallery/>
        </Layout>


    )
}
