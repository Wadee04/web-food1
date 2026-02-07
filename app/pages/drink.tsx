import React, { Component } from 'react'
import { Col, Row, ListGroup } from "react-bootstrap";

export class Drink extends Component {
  render() {
    return (
        <div>
            <Row>
                <Col sm={12} md ={6} lg={3}>
                <ListGroup>
                    <ListGroup.Item>น้ำแข็ง ถังเล็ก : 20 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำแข็ง ถังใหญ่ : 40 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำเปล่าใหญ่ : 25 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำเปล่าเล็ก : 10 บาท</ListGroup.Item>
                    <ListGroup.Item>แป๊ปซี่ : 45 บาท</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={12} md ={6} lg={3}>
                <ListGroup>
                    <ListGroup.Item>โค้ก : 45 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำส้มแฟนต้า : 45 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำแดงแฟนต้า : 45 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำเขียวแฟนต้า : 45 บาท</ListGroup.Item>
                    <ListGroup.Item>สไปร์ : 45 บาท</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={12} md ={6} lg={3}>
                <ListGroup>
                    <ListGroup.Item>ไวน์1 : 2549 บาท</ListGroup.Item>
                    <ListGroup.Item>ไวน์2 : 1259 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำพีช : 45 บาท</ListGroup.Item>
                    <ListGroup.Item>ลาเต้ : 80 บาท</ListGroup.Item>
                    <ListGroup.Item>สตอเบอร์รี่โซดา : 45 บาท</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={12} md ={6} lg={3}>
                <ListGroup>
                    <ListGroup.Item>เบียร์ : 65 บาท</ListGroup.Item>
                    <ListGroup.Item>ไวน์3 : 1459 บาท</ListGroup.Item>
                    <ListGroup.Item>สแปช : 25 บาท</ListGroup.Item>
                    <ListGroup.Item>โซจู : 75 บาท</ListGroup.Item>
                    <ListGroup.Item>น้ำส้มคั้น : 30 บาท</ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Drink