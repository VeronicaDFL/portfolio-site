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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi officiis fuga magnam suscipit saepe minima, corrupti quisquam illo iure dignissimos deserunt odio. Incidunt enim tenetur, odit ex ipsa alias.</p>
                    </Col>
                </Row>
            </Container>
            <Gallery/>
        </Layout>


    )
}
