import Carousel from "react-bootstrap/Carousel"
import { Container,Row,Col } from "react-bootstrap" 
import Layout from "../layout/AppLayout"
import image1 from "../images/car1.png"
import image2 from "../images/car2.png"
import image3 from "../images/car3.png"


export default function Home () {

    return (
        <Layout>
        <Container id="home">
          <Row>
            <Col>
           
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            
        {/* <h2>Home</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus magni soluta modi exercitationem voluptatibus. Temporibus ullam reiciendis doloribus? Explicabo, expedita. Harum possimus at voluptatum accusamus nostrum assumenda sint ipsum. */}
        </Col>
        </Row>
        </Container>
      </Layout>
    )
}
        

