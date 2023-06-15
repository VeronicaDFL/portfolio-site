import { Container, Row } from "react-bootstrap"
import Panel from "./Panel.jsx"
import data from "../../data/gallery.json"


export default function List () {


    return (
        <Container>
            <Row className="g-4">
                {
                    data.map((element,index)=> {
                        return (
                            <Panel
                            
                            key={index}
                            element={element}/>
                        )
                    })
                }

            </Row>
        </Container>
    )
}