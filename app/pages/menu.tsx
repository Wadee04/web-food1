import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import { Col, Row, Card } from "react-bootstrap";
import { text } from 'stream/consumers';

export class Menu extends Component {
  render() {
    return (
        <Container className='my-4'>
        <Row className='g-4'>
            {/* 1 คาโบนาร่า */}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/cabonara.png"
                    className='mx-auto d-block p-2'
                    style={{
                        height:'px', 
                        width:'150px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px',
                        }} />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Carbonara Pasta</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: พาสต้าคาโบนาร่าแสนอร่อย
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 150 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/* 2 แฮมเบอร์เกอร์*/}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/hamberger.png"
                    className='mx-auto d-block p-4'
                    style={{
                        height:'px', 
                        width:'160px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px',
                        }} />
                <br />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Hamberger</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: แฮมเบอร์เกอร์เนื้อฉ่ำๆ
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 129 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/*  3 สลัด */}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/salad.png"
                    className='mx-auto d-block p-2'
                    style={{
                        height:'px', 
                        width:'150px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px'
                        }} />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Salad</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: สลัดผักรักสุขภาพต้องจานนี้
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 259 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/* 4 เซ้ทชิล */}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/set.png"
                    className='mx-auto d-block p-3'
                    style={{
                        height:'px', 
                        width:'160px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px'
                        }} />
                <br />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>chill Set</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: แฮมเบอร์เกอร์ พิซซ่า เฟรนฟราย โค้ก
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 350 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/* 5 ซอสมะเขือเทศ*/}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/tomato.png"
                    className='mx-auto d-block p-2'
                    style={{
                        height:'px', 
                        width:'150px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px'
                        }} />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Spaghetti with tomato sauce</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: สปาเก็ตตี้ซอสมะเขือเทศ
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 150 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/* 6 สเต็ก*/}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/steak.png"
                    className='mx-auto d-block p-2'
                    style={{
                        height:'px', 
                        width:'190px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px'
                        }} />
                <br />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Beef Steak</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: สเต็กเนื้อพรีเมี่ยม
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 359 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/*  7 เซ็ทครอบครัว*/}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/fammilyset.png"
                    className='mx-auto d-block p-2'
                    style={{
                        height:'px', 
                        width:'250px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px'
                        }} />
                <br />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Family Set</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: เซ็ทครอบครัว
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 599 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/* 8 บริโต้ */}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/burrito.png"
                    className='mx-auto d-block p-2'
                    style={{
                        height:'px', 
                        width:'140px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px'
                        }} />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Burrito</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: บริโต้
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 129 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            {/* 9 แซลมอนสลัด*/}
            <Col xs={12} sm={4} className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img 
                    variant='top'
                    src="public/image/Salmon Salad.png"
                    className='mx-auto d-block p-2'
                    style={{
                        height:'px', 
                        width:'150px', 
                        objectFit:'cover',
                        border: '3px ', 
                        borderRadius: '8px'
                        }} />
                <Card.Body className="d-flex flex-column"> 
                    <Card.Title className='text-center'>Salmon Salad</Card.Title>
                    <Card.Text className='text-center'>
                    รายละเอียดอาหาร: แซลมอนสลัด
                    </Card.Text>
                    <div className="mt-auto text-end"> 
                    <Card.Text className="mb-0 fw-bold">
                        ราคา: 269 บาท
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    );
  }
}

export default Menu