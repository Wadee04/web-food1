import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import { Col, Row, Stack, Image, Navbar } from "react-bootstrap";

export class Top extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#ECD4D4', padding:'10px'}}>
        <Row>
            <Col>
                <Stack direction ="horizontal" gap={3}>
                    <Navbar.Brand href="#home">
                      <img src={"public/icons/logo.png"} className="img-fluid" alt="" style={{width:"100px", height:"100px"}}/>
                    </Navbar.Brand>
                    <div >
                      <div style={{ fontSize: '32px ', fontWeight:'bold', fontFamily:'Luckiest Guy'}}>Love Food</div>
                      <div style={{fontFamily:'Comfortaa', fontWeight:'bold'}}>Welcome to Love Food</div>
                    </div>
                    <div className="ms-auto" >เปลี่ยนภาษา</div>
                    <div className="vr" style={{ height:'30px', alignSelf:'center'}} />
                    <div>เข้าสู่ระบบ</div>
                    <div>สมัครสมาชิก</div>
                </Stack>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Top