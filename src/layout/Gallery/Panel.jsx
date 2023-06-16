import { Col, Image } from "react-bootstrap"
export default function Panel ({ element: {title, image,site }}) {

    return(
        <Col xs={11} md={4} lg={3}>
              <a href={site} target="_blank" rel="noreferrer">
               <Image src={`/images/${image}`} fluid/>
              </a>
              <h3>{title}</h3>
        </Col>
    )
}