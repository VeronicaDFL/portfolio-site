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
          <h1>3 things about me🤟👇</h1>
            <Col>
         
           
              <Carousel>
                <Carousel.Item>
                
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
               
                  
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    />

               
              </Carousel.Item>
              <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image3}
                      alt="Third slide"
                      />
                </Carousel.Item>
              </Carousel>

              
                  </Col>
                  </Row>
                  </Container>
                </Layout>
              )
          }
                  

