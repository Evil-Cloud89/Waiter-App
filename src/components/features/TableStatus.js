import { Button, Col, Form, Row } from "react-bootstrap";

const TableStatus = ({ status, peopleAmount, maxPeopleAmount, bill }) => {
  return (
    <Form style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Form.Group as={Row} className="mb-4">
        <Form.Label column sm={1}>
          <b>Status: </b>
        </Form.Label>
        <Col sm={2}>
          <Form.Select defaultValue={status}>
            <option value="Free">Free</option>
            <option value="Reserved">Reserved</option>
            <option value="Busy">Busy</option>
            <option value="Cleaning">Cleaning</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group className="mb-4">
        <Row className="d-flex align-items-center">
          <Form.Label column sm={1}>
            <b>People: </b>
          </Form.Label>
          <Col sm={1}>
            <Form.Control type="text" value={peopleAmount} />
          </Col>
          /
          <Col sm={1}>
            <Form.Control type="text" value={maxPeopleAmount} />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group as={Row} className="mb-4">
        <Form.Label column sm={1}>
          <b>Bill: </b>
        </Form.Label>
        <Col className="d-flex align-items-center" sm={1}>
         $ <Form.Control type="text" className="ms-2" value={bill} />
        </Col>
      </Form.Group>

      <Form.Group>
        <Button type="submit">Update</Button>
      </Form.Group>
    </Form>
  )
};

export default TableStatus;