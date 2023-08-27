// This component will display the floor plan and table availability.
// It will have a list of Table components.

// The FloorPlan component will render multiple Table components.
// Each Table component will have conditional rendering: if the 
// table is in the "seated" state, it will render the seated guest 
// icons; if not, it will render the GuestIcon component for draggable 
// guests.

import React from 'react'
import Table from './Table'
import { Container,Row, Col} from 'react-bootstrap';


export default function FloorPlan() {
  return (
    <>
      <div className="circle-container mt-5">
      <Container className="floor-plan">
        <Row>
            <Col className=' table-cell square-table' sm={3}>Table 1</Col>
            <Col className='table-cell square-table' sm={3}>Table 2</Col>
            <Col className='table-cell square-table' sm={3}>Table 3</Col>
        </Row>
        <Row>
        <Col className='table-cell rectangle-table' sm={6}>Table 4</Col>
        <Col className='table-cell square-table' sm={3}>Table 5</Col>
        </Row>
        <Row>
        <Col className='table-cell square-table' sm={3}>Table 6</Col>
        <Col className='table-cell square-table'sm={3} >Table 7</Col>
        <Col className='table-cell rectangle-table' sm={3}>Table 8</Col>
       
        </Row>
        <Row>
            <Col className='table-cell grande-table'>Table 9</Col>
        </Row>




      </Container>
    </div>
    <Table/>
    </>
  )
}
