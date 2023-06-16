import { Col, Image } from "react-bootstrap"
export default function Panel ({ element: {title, image,site,content }}) {

    return(
        <Col xs={11} md={4} lg={3}>
              <a href={site} target="_blank" rel="noreferrer">
               <Image src={`/images/${image}`} fluid/>
              </a>
              <h2>{title}</h2>
              <p>{content}</p>
        </Col>
    )
}